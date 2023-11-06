import React from 'react';
import { AnswersResultS, BtnWriteReview, BtnWriteReviewLink, PageWrapper, QuizeBox, ResultTextS, ResultTitleS, } from './QuizResultStyled';
import RatingStars from '../../../shared/components/RatingStars/RatingStars';
import BtnClose from '../../../shared/components/Buttons/BtnClose/BtnClose';
import { useLocation } from 'react-router';

const QuizResult = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const correctAnswersCount = searchParams.get('correctAnswersCount');
  const totalQuestions = searchParams.get('totalQuestions');
  const quizId = searchParams.get('quizId');
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

        <ResultTextS>Correct answers</ResultTextS>
        <AnswersResultS>
          {/* {message.correctAnswers} / {message.totalQuestions} */}
          </AnswersResultS>

        <ResultTextS>Rate the quiz</ResultTextS>
        <RatingStars rate={1}/> 

        {/* <div className="star-rating">
          {[...Array(5)].map((star) => {
            return <span className="star">&#9733;</span>;
          })}
        </div> */}
 
{/* ============================================ */}
       {/* <RatingBox onSubmit={handleSendRating}
        // sx={{'& > legend': { mt: 2 },}}
      >
        <Typography component="legend">Rate the quiz</Typography>
          {/* <RatingS
            name="simple-controlled"
            value={value}
            size="large"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            // onChange={handleRatingChange}
            emptyIcon={<StarIcon/>}
          /> */}
        {/* </RatingBox>  */}
{/* ========================================= */}

        <BtnWriteReviewLink to="/feedback">Write a review</BtnWriteReviewLink>
      </QuizeBox>
    </PageWrapper>
  );
};

export default QuizResult;
