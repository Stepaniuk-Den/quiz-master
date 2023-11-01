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
} from "./FeedbackFormNoAuthStyled";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createReviewThunk } from "../../../redux/feedback/feedbackThunks";
import { notifyError } from "../../../shared/NotificationToastify/Toasts";

const FeedbackFormNoAuth = ({ onSendClick }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      rating: 0,
      feedback: "",
    },

    validationSchema: Yup.object({
      feedback: Yup.string().required("Please write your feedback"),
    }),

    onSubmit: async (values) => {
      const reviewData = {
        userName: values.name,
        rate: values.rating,
        comment: values.feedback,
      };

      try {
        await dispatch(createReviewThunk(reviewData));
        onSendClick();
      } catch (error) {
        notifyError(error);
      }
    },
  });

  return (
    <>
      <FormContainer>
        <CloseBtnContainer>
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
