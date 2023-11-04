import React from 'react';
import { AnswersResultS, BtnWriteReview, PageWrapper, QuizeBox, ResultTextS, ResultTitleS, } from './QuizResultStyled';
import RatingStars from '../../../shared/components/RatingStars/RatingStars';
import BtnClose from '../../../shared/components/Buttons/BtnClose/BtnClose';
import { useLocation } from 'react-router';

const QuizResult = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const correctAnswersCount = searchParams.get('correctAnswersCount');
    const totalQuestions = searchParams.get('totalQuestions');
  return (
    <PageWrapper>
          <QuizeBox>
          <BtnClose type="button" 
          // onClick={handleClickBtnClose} 
          />
              <ResultTitleS>The results</ResultTitleS>
              
              <ResultTextS>Correct answers</ResultTextS>
              <AnswersResultS>{correctAnswersCount}/{totalQuestions}</AnswersResultS>
             
              <ResultTextS>Rate the quiz</ResultTextS>
              <RatingStars rate={1}/> 

              <BtnWriteReview>Write a review</BtnWriteReview>
      </QuizeBox>
    </PageWrapper>
  );
}

export default QuizResult;