import React, { useEffect, useState } from "react";
import {
  NextButton,
  BackButton,
  StyledButton,
  TitleQuestion,
  AnswersContainer,
  ButtonText,
  DownContainer,
  AnswersCounter,
  AnswerLabels,
} from "./QuizQuestionStyled";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {
  getPassedQuizzesThunk,
  passedUsersQuiz,
  updateQuizThunk,
  updateUsersQuiz,
} from "../../../redux/quiz/quizThunks";
import { StyledCountdown, TimeText } from "../Time/Time.styled";
import { useAuth } from "../../../hooks/useAuth";

function QuizQuestion({ questions, quizId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const answerLabels = ["A", "B", "C", "D"];
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [previousQuestion, setPreviousQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const searchParams = new URLSearchParams(location.search);
  const userName = searchParams.get("userName");

  const answers = questions[currentQuestion].answers;
  const question = questions[currentQuestion];
  const { isAuth } = useAuth();

  const handleButtonClick = (answer, index) => {
    const isCorrect = answer.correctAnswer;

    setIsAnswerSelected(true);

    setSelectedAnswer({
      answer,
      isCorrect: isCorrect ? "correct" : "incorrect",
    });

    setUserAnswers((prevAnswers) => {
      const questionId = questions[currentQuestion]._id;

      return {
        ...prevAnswers,
        [questionId]: {
          true: answers.findIndex((ans) => ans.correctAnswer === true),
          false: !isCorrect
            ? index
            : answer.correctAnswer
            ? index
            : prevAnswers[questionId]?.false,
          time: timeRemaining,
        },
      };
    });

    if (isCorrect) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setIsAnswerSelected(false);
      setPreviousQuestion(currentQuestion);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate(
        `/quizresult?quizId=${quizId}&userName=${userName}&correctAnswersCount=${correctAnswersCount}&totalQuestions=${questions.length}`
      );
      const quizData = {
        result: {
          quizId: quizId,
          quantityQuestions: questions.length,
          correctAnswers: correctAnswersCount,
        },
      };

      dispatch(updateQuizThunk(quizId));
      if (isAuth) {
        dispatch(getPassedQuizzesThunk()).then((arr) => {
          const totalPassed = arr.payload;
        console.log(totalPassed)
          if (totalPassed.length === 0 ) {
            dispatch(passedUsersQuiz(quizData));
          } else if (totalPassed.data.some((item) => item._id === quizId)) {
            dispatch(updateUsersQuiz(quizData));
          }else {
            dispatch(passedUsersQuiz(quizData));
          }
        });
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (previousQuestion !== null) {
      setIsAnswerSelected(false);
      setCurrentQuestion(previousQuestion);
      setPreviousQuestion(previousQuestion - 1);

      const prevQuestionId = questions[previousQuestion]._id;
      const prevUserAnswer = userAnswers[prevQuestionId];

      if (prevUserAnswer && prevUserAnswer.time) {
        setTimeRemaining(prevUserAnswer.time);
      } else {
        setTimeRemaining(question.time);
      }
    }
  };

  const isAnswerTrue = userAnswers[questions[currentQuestion]._id]?.true;
  const isAnswerFalse = userAnswers[questions[currentQuestion]._id]?.false;

  const getButtonClass = (index) => {
    if (index === isAnswerTrue && index === isAnswerFalse) {
      return "correct";
    } else if (index === isAnswerTrue) {
      return "correct";
    } else if (index === isAnswerFalse) {
      return "incorrect";
    } else {
      return "normal";
    }
  };

  const [timeRemaining, setTimeRemaining] = useState(question.time);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    setTimeRemaining(question.time);
  }, [question, currentQuestion]);

  useEffect(() => {
    let timer;

    if (!isAnswerSelected && timeRemaining > 0) {
      timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (isAnswerSelected) {
      clearTimeout(timer);
      console.log(userAnswers[questions[currentQuestion]._id]);
    }

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <TitleQuestion>{questions[currentQuestion].question}</TitleQuestion>
      <TimeText>
        Time:
        <StyledCountdown>
          <span>
            {userAnswers[questions[currentQuestion]._id]
              ? formatTime(userAnswers[questions[currentQuestion]._id].time)
              : formatTime(timeRemaining)}
          </span>
        </StyledCountdown>
      </TimeText>
      <div>
        <AnswersContainer>
          {answers.map((answer, index) => (
            <li key={index}>
              <StyledButton
                onClick={() => handleButtonClick(answer, index)}
                isCorrect={getButtonClass(index)}
                disabled={userAnswers[questions[currentQuestion]._id]}
              >
                <ButtonText>
                  <AnswerLabels>{answerLabels[index]} : </AnswerLabels>
                  {`${answer.answer}`}
                </ButtonText>
              </StyledButton>
            </li>
          ))}
        </AnswersContainer>
      </div>
      <DownContainer>
        <AnswersCounter>
          {currentQuestion + 1}/{questions.length}
        </AnswersCounter>
        <NextButton
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
        >
          Next
        </NextButton>
        {currentQuestion > 0 && (
          <BackButton onClick={handlePreviousQuestion}>Back</BackButton>
        )}
      </DownContainer>
    </>
  );
}

export default QuizQuestion;
