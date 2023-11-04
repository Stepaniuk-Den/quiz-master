import React, { useState } from 'react';
import { NextButton, TitleQuestion } from './QuizQuestionStyled';
import AnswerList from '../AnswerList/AnswerList';
import Time from '../Time/Time';
import { useNavigate } from 'react-router';

function QuizQuestion({ questions }) {
    const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isTestCompleted, setIsTestCompleted] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
        setIsTestCompleted(true);
        if (isTestCompleted) {
           navigate("/quizresult")
       }
    }
  };

  return (
    <>
      <TitleQuestion>{questions[currentQuestion].question}</TitleQuestion>
      <Time nextQuestion={handleNextQuestion} question={questions[currentQuestion]} currentQuestion={currentQuestion} />
      <AnswerList answers={questions[currentQuestion].answers} />
      <div style={{ textAlign: 'right' }}>
        {currentQuestion + 1}/{questions.length}
      </div>
      <NextButton onClick={handleNextQuestion}>
        Next
      </NextButton>
    </>
  );
}

export default QuizQuestion;
