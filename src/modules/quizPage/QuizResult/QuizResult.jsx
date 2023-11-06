import React, { useRef, useState } from "react";
import {
  AnswersResultS,
  BtnWriteReview,
  BtnWriteReviewLink,
  PageWrapper,
  QuizeBox,
  RatingBox,
  RatingS,
  ResultTextS,
  ResultTitleS,
} from "./QuizResultStyled";
import RatingStars from "../../../shared/components/RatingStars/RatingStars";
import BtnClose from "../../../shared/components/Buttons/BtnClose/BtnClose";

import StarIcon from "@mui/icons-material/Star";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createReviewQuizThunk } from "../../../redux/feedback/feedbackThunks";

const QuizResult = ({ message, quiz }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  console.log(value)
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = useRef(location.state?.from);


 

  // console.log(location)

  // const handleRatingChange = (value) => {
  //   setValue(Number(value));
  // };

//   const handleSendRating = () => {
//     if (value > 0) {
//       dispatch(createReviewQuizThunk(value))
//   }
//   return;
// }

 const handleClickBtnClose = () => {
// dispatch
// dispatch
  
navigate(backLink.current ?? '/');
};
 


  return (
    <PageWrapper>
      <QuizeBox>
        <BtnClose
          type="submit"
          onClick={handleClickBtnClose}
        />
        <ResultTitleS>The results</ResultTitleS>

        <ResultTextS>Correct answers</ResultTextS>
        <AnswersResultS>
          {/* {message.correctAnswers} / {message.totalQuestions} */}
          </AnswersResultS>

        <ResultTextS>Rate the quiz</ResultTextS>
        <RatingStars rate={rate}/> 

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
