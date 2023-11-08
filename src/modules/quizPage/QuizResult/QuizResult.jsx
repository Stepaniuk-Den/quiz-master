import React, { useState } from "react";
import {
  AiOutlineCloseS,
  AnswersResultS,
  BtnCloseS,
  BtnWriteReviewLink,
  PageWrapper,
  QuizeBox,
  RatingBox,
  RatingS,
  ResultTextS,
  ResultTitleS,
} from "./QuizResultStyled";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { createReviewQuizThunk } from "../../../redux/feedback/feedbackThunks";
import StarIcon from "@mui/icons-material/Star";
import {
  notifyError,
  notifyRateAddSuccess,
} from "../../../shared/NotificationToastify/Toasts";


const QuizResult = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const correctAnswersCount = searchParams.get("correctAnswersCount");
  const totalQuestions = searchParams.get("totalQuestions");
  const quizId = searchParams.get("quizId");
  const [value, setValue] = useState(0);

  // const navigate = useNavigate();
  // const backLink = useRef(location.state?.from);
  // navigate(backLink.current ?? '/');

  const handleClickBtnClose = (value) => {
    if (value > 0) {
      dispatch(createReviewQuizThunk({ id: quizId, rate: value }))
        .then(() => {
          notifyRateAddSuccess();
          window.history.back();
        })
        .catch((error) => {
          notifyError(error);
          window.history.back();
        });
    } else {
      window.history.back();
    }
  };

  return (
    <PageWrapper>
      <QuizeBox>
        <BtnCloseS type="submit" onClick={() => handleClickBtnClose(value)}>
          <AiOutlineCloseS />
        </BtnCloseS>
        <ResultTitleS>The results</ResultTitleS>
        <ResultTextS>Correct answers</ResultTextS>
        <AnswersResultS>
          {correctAnswersCount}/{totalQuestions}
        </AnswersResultS>

        <ResultTextS>Rate the quiz</ResultTextS>
        <RatingBox>
          <RatingS
            name="simple-controlled"
            value={value}
            // size="large"
            onChange={(_, newValue) => {
              setValue(newValue);
            }}
            emptyIcon={<StarIcon />}
          />
        </RatingBox>

        <BtnWriteReviewLink to="/feedback">Write a review</BtnWriteReviewLink>
      </QuizeBox>
    </PageWrapper>
  );
};

export default QuizResult;
