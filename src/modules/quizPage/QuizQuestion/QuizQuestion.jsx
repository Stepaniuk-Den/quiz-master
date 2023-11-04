import React, { useEffect, useState } from 'react';
import { NextButton, StyledButton, TitleQuestion } from './QuizQuestionStyled';
import Time from '../Time/Time';
import { useNavigate } from 'react-router';

function QuizQuestion({ questions }) {
    const navigate = useNavigate();
    const answerLabels = ['A', 'B', 'C', 'D'];

    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1);
    const [incorrectAnswerIndex, setIncorrectAnswerIndex] = useState(-1);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isTestCompleted, setIsTestCompleted] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswerSelected, setIsAnswerSelected] = useState(false); // Відстеження чи вибрана відповідь
    const answers = questions[currentQuestion].answers;

    const handleButtonClick = (answer, index) => {
        const isCorrect = answer.correctAnswer;

        // Зупинка лічильника часу
        setIsAnswerSelected(true);

        setSelectedAnswer({
            answer,
            isCorrect: isCorrect ? 'correct' : 'incorrect',
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
        if (currentQuestion < questions.length - 1) {
            // Скидання стану isAnswerSelected на false при переході до наступного питання
            setIsAnswerSelected(false);
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setIsTestCompleted(true);
            if (isTestCompleted) {
                navigate(`/quizresult?correctAnswersCount=${correctAnswersCount}&totalQuestions=${questions.length}`);
            }
        }
    };

    // Скидання кольорів при рендері нових відповідей
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
                <ul>
                    {answers.map((answer, index) => (
                        <li key={index}>
                            <StyledButton
                                onClick={() => handleButtonClick(answer, index)}
                                isCorrect={
                                    index === incorrectAnswerIndex ? 'incorrect' :
                                    index === correctAnswerIndex ? 'correct' :
                                    'normal'
                                }
                                disabled={isAnswerSelected}
                            >
                                {`${answerLabels[index]}: ${answer.answer}`}
                            </StyledButton>
                        </li>
                    ))}
                </ul>
            </div>
            <p style={{ textAlign: 'right' }}>
                {currentQuestion + 1}/{questions.length}
            </p>
            <NextButton onClick={handleNextQuestion} disabled={selectedAnswer === null}>
                Next
            </NextButton>
        </>
    );
}

export default QuizQuestion;
