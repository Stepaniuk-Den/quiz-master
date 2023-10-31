import { useState } from "react";
import {
  ErrorsStyled,
  FormContainer,
  FormTextarea,
  FormWrapper,
  InputWrapper,
  RateStar,
  RatingWrapper,
  SendBtn,
  StarBtn,
  TextRating,
} from "./FeedbackFormStyled";
import { useFormik } from "formik";
import * as Yup from "yup";

const FeedbackForm = ({ onSendClick }) => {
  const [starSelected, setStarSelected] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const formik = useFormik({
    initialValues: {
      feedback: "",
    },

    validationSchema: Yup.object({
      feedback: Yup.string().required("Please write your feedback"),
    }),

    onSubmit: (values, { resetForm }) => {
      const formData = {
        feedback: values.feedback,
        stars: starSelected,
      };
      onSendClick();
      resetForm();
      console.log(formData);
    },
  });

  const handleStarClick = (index) => {
    const updatedStars = starSelected.map((isSelected, i) => i <= index);
    setStarSelected(updatedStars);
    console.log(index);
  };
  return (
    <>
      <FormContainer>
        <FormWrapper>
          <RatingWrapper>
            <TextRating>Rating</TextRating>
            {starSelected.map((isSelected, index) => (
              <StarBtn key={index} onClick={() => handleStarClick(index)}>
                <RateStar selected={isSelected} />
              </StarBtn>
            ))}
          </RatingWrapper>
          <form onSubmit={formik.handleSubmit}>
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
        </FormWrapper>
      </FormContainer>
    </>
  );
};

export default FeedbackForm;
