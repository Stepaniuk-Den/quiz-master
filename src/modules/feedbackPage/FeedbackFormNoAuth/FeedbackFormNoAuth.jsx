import { useState } from "react";
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
  StarBtn,
  TextRating,
} from "./FeedbackFormNoAuthStyled";
import { useFormik } from "formik";
import * as Yup from "yup";

const FeedbackFormNoAuth = ({ onSendClick }) => {
  const [starSelected, setStarSelected] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const formik = useFormik({
    initialValues: {
      // rating: [false, false, false, false, false],
      feedback: "",
    },

    validationSchema: Yup.object({
      // rating: Yup.array().oneOf([true], "Виберіть хоча б одну зірку"),
      feedback: Yup.string().required("Please write your feedback"),
    }),

    onSubmit: (values, { resetForm }) => {
      onSendClick();
      resetForm();
      console.log(values);
    },
  });

  const handleStarClick = (index) => {
    const updatedStars = starSelected.map((isSelected, i) => i <= index);
    setStarSelected(updatedStars);
  };

  // const handleClick = () => {
  //   onSendClick();
  // };
  return (
    <>
      <FormContainer>
        <CloseBtnContainer>
          <CloseBtn />
        </CloseBtnContainer>
        <InputWrapper>
          <FormTitle>Write a review</FormTitle>
          <NameInput type="text" placeholder="Name" />
        </InputWrapper>
        <RatingWrapper>
          <TextRating>Rate the quiz</TextRating>
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
