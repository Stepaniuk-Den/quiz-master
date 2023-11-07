import React, { useEffect, useState } from "react";
import {
  NextButton,
  BackButton, // Добавляем кнопку "Назад"
  StyledButton,
  TitleQuestion,
  AnswersContainer,
  ButtonText,
  DownContainer,
  AnswersCounter,
  AnswerLabels
} from "./QuizQuestionStyled";
import Time from "../Time/Time";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { getPassedQuizzesThunk, passedUsersQuiz, updateQuizThunk, updateUsersQuiz } from "../../../redux/quiz/quizThunks";

function QuizQuestion({ questions,quizId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const answerLabels = ["A", "B", "C", "D"];
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1);
  const [incorrectAnswerIndex, setIncorrectAnswerIndex] = useState(-1);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [previousQuestion, setPreviousQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const answers = questions[currentQuestion].answers;

  const handleButtonClick = (answer, index) => {
    const isCorrect = answer.correctAnswer;

    setIsAnswerSelected(true);

    setSelectedAnswer({
      answer,
      isCorrect: isCorrect ? "correct" : "incorrect",
    });

    if (isCorrect) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
      setCorrectAnswerIndex(index);
      setIncorrectAnswerIndex(-1);
    } else {
      setIncorrectAnswerIndex(index);

      const correctIndex = answers.findIndex((answer) => answer.correctAnswer);
      if (correctIndex !== -1) {
        setCorrectAnswerIndex(correctIndex);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length-1) {
      setIsAnswerSelected(false);
      setPreviousQuestion(currentQuestion);
      setCurrentQuestion(currentQuestion + 1);
    } else {
        navigate(
          `/quizresult?quizId=${quizId}&correctAnswersCount=${correctAnswersCount}&totalQuestions=${questions.length}`
        );
      const quizData = {
        result: {
          quizId: quizId,
          quantityQuestions: questions.length,
          correctAnswers: correctAnswersCount,
        },
      };

      dispatch(updateQuizThunk(quizId))

      dispatch(getPassedQuizzesThunk())
        .then(arr => {
        const totalPassed = arr.payload;
        if (totalPassed.some(item => item._id === quizId)) {
          dispatch(updateUsersQuiz(quizData))
        } else {
          dispatch(passedUsersQuiz(quizData))
        }
      })
    }
  };


  const handlePreviousQuestion = () => {
    if (previousQuestion !== null) {
      setIsAnswerSelected(false);
      setCurrentQuestion(previousQuestion); 
      setPreviousQuestion(previousQuestion - 1); 
    }
  };

  useEffect(() => {
    setCorrectAnswerIndex(-1);
    setIncorrectAnswerIndex(-1);
  }, [answers]);

  return (
    <>
      <TitleQuestion>{questions[currentQuestion].question}</TitleQuestion>
      <Time
        question={questions[currentQuestion]}
        currentQuestion={currentQuestion}
        isAnswerSelected={isAnswerSelected}
      />
      <div>
        <AnswersContainer>
          {answers.map((answer, index) => (
            <li key={index}>
              <StyledButton
                onClick={() => handleButtonClick(answer, index)}
                isCorrect={
                  index === incorrectAnswerIndex
                    ? "incorrect"
                    : index === correctAnswerIndex
                    ? "correct"
                    : "normal"
                }
                disabled={isAnswerSelected}
              >
                <ButtonText><AnswerLabels>{answerLabels[index]} : </AnswerLabels>{`${answer.answer}`}</ButtonText>
              </StyledButton>
            </li>
          ))}
        </AnswersContainer>
      </div>
      <DownContainer>
        <AnswersCounter style={{ textAlign: "right" }}>
          {currentQuestion + 1}/{questions.length}
        </AnswersCounter>
        <NextButton
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
        >
          Next
        </NextButton>
        {currentQuestion > 0 && (
          <BackButton onClick={handlePreviousQuestion}>
            Back
          </BackButton>
        )}
      </DownContainer>
    </>
  );
}

export default QuizQuestion;