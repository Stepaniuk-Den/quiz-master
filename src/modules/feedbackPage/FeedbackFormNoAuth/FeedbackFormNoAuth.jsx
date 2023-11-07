import {
  CloseBtn,
  CloseBtnContainer,
  ErrorsStyled,
  FormContainer,
  FormTextarea,
  FormTitle,
  InputWrapper,
  NameInput,
  RateStar,
  RatingWrapper,
  SendBtn,
  SplashImg,
  TextRating,
} from "./FeedbackFormNoAuthStyled";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createReviewQuizThunk } from "../../../redux/feedback/feedbackThunks";
import { notifyError } from "../../../shared/NotificationToastify/Toasts";

import backgroundImg from "../../../shared/images/desktop/question-desktop@2x.png";
import { useLocation, useNavigate } from "react-router";

const FeedbackFormNoAuth = ({ onSendClick, to }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const quizId = searchParams.get("quizId");

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  const formik = useFormik({
    initialValues: {
      rating: 0,
      feedback: "",
    },

    validationSchema: Yup.object({
      feedback: Yup.string()
        .min(8, "Enter at least 8 characters")
        .required("Please write your feedback"),
    }),

    onSubmit: async (values) => {
      const reviewData = {
        userName: "Artem",
        rate: values.rating,
        comment: values.feedback,
        quizId: quizId,
        // quizId: "653b7f41b96bb14670aac9ed",
      };
      console.log(reviewData);
      try {
        await dispatch(createReviewQuizThunk(reviewData));
        onSendClick();
      } catch (error) {
        notifyError(error);
      }
    },
  });

  return (
    <>
      <SplashImg src={backgroundImg} alt="splash" loading="lazy" />
      <FormContainer>
        <CloseBtnContainer onClick={handleClick}>
          <CloseBtn />
        </CloseBtnContainer>
        <form onSubmit={formik.handleSubmit}>
          <InputWrapper>
            <FormTitle>Write a review</FormTitle>
            <NameInput
              type="text"
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              value="Artem"
              // value={formik.values.name}
            />
          </InputWrapper>
          <RatingWrapper>
            <TextRating>Rate the quiz</TextRating>
            {Array.from({ length: 5 }, (_, index) => (
              <label key={index}>
                <RateStar
                  selected={formik.values.rating >= index + 1}
                  onClick={() => formik.setFieldValue("rating", index + 1)}
                />
              </label>
            ))}
            {formik.errors.rating && formik.touched.rating && (
              <div>{formik.errors.rating}</div>
            )}
          </RatingWrapper>
          <InputWrapper
            className={
              formik.errors.feedback && formik.touched.feedback
                ? "has-error"
                : ""
            }
          >
            <FormTextarea
              type="text"
              name="feedback"
              placeholder="What is your opinion on the quiz"
              onChange={formik.handleChange}
              value={formik.values.feedback}
            />
            {formik.errors.feedback && formik.touched.feedback ? (
              <ErrorsStyled>{formik.errors.feedback}</ErrorsStyled>
            ) : null}
            <SendBtn type="submit">Send</SendBtn>
          </InputWrapper>
        </form>
      </FormContainer>
    </>
  );
};

export default FeedbackFormNoAuth;
