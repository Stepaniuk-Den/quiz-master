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
  TextRating,
} from "./QuizFeedbackStyled";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { selectUser } from "../../../redux/user/userSelectors";
import { createQuizReviewThunk } from "../../../redux/feedback/feedbackThunks";
import { notifyError } from "../../../shared/NotificationToastify/Toasts";
import { useAuth } from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useRef } from "react";

const QuizFeedback = ({ to }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const infoUser = useSelector(selectUser);
  const inputValue = searchParams.get("inputValue");
  const { isAuth } = useAuth();
  const { quizId } = useParams();
  const backLink = useRef(location.state?.from);

  const handleClick = () => {
    // if (to) {
    //   navigate(to);
    // } else {
    //   navigate(-1);
    // }
    navigate(backLink.current ?? "/");
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
        userName: isAuth ? inputValue : infoUser.name,
        userAvatar: infoUser.userAvatar,
        rate: values.rating,
        comment: values.feedback,
        quizId: quizId,
      };
      try {
        await dispatch(createQuizReviewThunk({ quizId, reviewData }));
        navigate(`/quiz/${quizId}/aftertestfeedback`);
        console.log("feedback", quizId);
      } catch (error) {
        notifyError(error);
      }
    },
  });

  return (
    <>
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
              value={formik.values.name}
              defaultValue={!isAuth ? inputValue : infoUser.name}
              readOnly={!isAuth ? inputValue : infoUser.name}
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

export default QuizFeedback;
