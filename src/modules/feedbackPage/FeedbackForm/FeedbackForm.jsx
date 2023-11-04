import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  ErrorsStyled,
  FormContainer,
  FormTextarea,
  InputWrapper,
  RateStar,
  RatingWrapper,
  SendBtn,
  TextRating,
} from "./FeedbackFormStyled";
import { createReviewThunk } from "../../../redux/feedback/feedbackThunks";
import { notifyError } from "../../../shared/NotificationToastify/Toasts";
import { selectUser } from "../../../redux/user/userSelectors";

const FeedbackForm = ({ onSendClick }) => {
  const dispatch = useDispatch();
  const infoUser = useSelector(selectUser);

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
        userName: infoUser.name,
        rate: values.rating,
        comment: values.feedback,
      };
      console.log(reviewData);
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
        <form onSubmit={formik.handleSubmit}>
          <RatingWrapper>
            <TextRating>Rating</TextRating>
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
              placeholder="Write your opinion or wish for the service"
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

export default FeedbackForm;
