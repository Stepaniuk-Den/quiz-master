import React, { useState, useEffect } from 'react';
import { StyledButton } from './AnswerListStyled';

const AnswerList = ({ answers, handleClickAnswer, currentQuestion }) => {
    const answerLabels = ['A', 'B', 'C', 'D'];
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1);
    const [incorrectAnswerIndex, setIncorrectAnswerIndex] = useState(-1);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    
    const handleButtonClick = (answer, index) => {
    handleClickAnswer(answer, index);
    const isCorrect = answer.correctAnswer;

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
    
    useEffect(() => {
        console.log(currentQuestion)
        if (currentQuestion === answers.length) {
        
        console.log(`Кількість правильних відповідей: ${correctAnswersCount}`);
    }
}, [correctAnswersCount, answers]);
// Скидання кольорів при рендері нових відповідей
    useEffect(() => {
        setCorrectAnswerIndex(-1);
        setIncorrectAnswerIndex(-1);
    }, [answers]);

    return (
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
                        >
                            {`${answerLabels[index]}: ${answer.answer}`}
                        </StyledButton>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnswerList;
