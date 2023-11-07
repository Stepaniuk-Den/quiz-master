import React, { useEffect, useRef, useState } from "react";
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
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { createReviewQuizThunk } from "../../../redux/feedback/feedbackThunks";
import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const QuizResult = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const correctAnswersCount = searchParams.get("correctAnswersCount");
  const totalQuestions = searchParams.get("totalQuestions");
  const quizId = searchParams.get("quizId");
  const [value, setValue] = useState(0);

  // const backLink = useRef(location.state?.from);
  // const [allQuiz, setAllQuiz] = useState([]);
  // useEffect(()=> {
  // dispatch(getRandomQuizzesThunk()).then(data=> console.log(data))
  // })

  const handleClickBtnClose = (quizId, value) => {
    if (value > 0) {
      dispatch(createReviewQuizThunk(quizId, { rate: 5 }));
    }
    // navigate(backLink.current ?? '/');
  };

  return (
    <PageWrapper>
      <QuizeBox>
        <BtnClose type="button" onClick={handleClickBtnClose()} />
        <ResultTitleS>The results</ResultTitleS>

        <ResultTextS>Correct answers</ResultTextS>
        <AnswersResultS>
          {correctAnswersCount}/{totalQuestions}
        </AnswersResultS>

        {/* <ResultTextS>Rate the quiz</ResultTextS>
              <RatingStars rate={1}/>  */}

        {/* <div className="star-rating">
          {[...Array(5)].map((star) => {
            return <span className="star">&#9733;</span>;
          })}
        </div> */}

        {/* ============================================ */}
        <RatingBox
        //  onSubmit={handleSendRating}
        // sx={{'& > legend': { mt: 2 },}}
        >
          <Typography component="legend">Rate the quiz</Typography>
          <RatingS
            name="simple-controlled"
            value={value}
            size="large"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            // onChange={handleRatingChange}
            emptyIcon={<StarIcon />}
          />
        </RatingBox>
        {/* ========================================= */}

        <BtnWriteReviewLink to="/feedback">Write a review</BtnWriteReviewLink>
      </QuizeBox>
    </PageWrapper>
  );
};

export default QuizResult;
