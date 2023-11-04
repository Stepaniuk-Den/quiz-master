import React from 'react';
import { AnswersResultS, BtnWriteReview, PageWrapper, QuizeBox, ResultTextS, ResultTitleS, } from './QuizResultStyled';
import RatingStars from '../../../shared/components/RatingStars/RatingStars';
import BtnClose from '../../../shared/components/Buttons/BtnClose/BtnClose';

const QuizResult =({ message }) => {
  return (
    <PageWrapper>
          <QuizeBox>
          <BtnClose type="button" 
          // onClick={handleClickBtnClose} 
          />
              <ResultTitleS>The results</ResultTitleS>
              
              <ResultTextS>Correct answers</ResultTextS>
              <AnswersResultS>{message}</AnswersResultS>
             
              <ResultTextS>Rate the quiz</ResultTextS>
              <RatingStars rate={1}/> 

              <BtnWriteReview>Write a review</BtnWriteReview>
      </QuizeBox>
    </PageWrapper>
  );
}

export default QuizResult;