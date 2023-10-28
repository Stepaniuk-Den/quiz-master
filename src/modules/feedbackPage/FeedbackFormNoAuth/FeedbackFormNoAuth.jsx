import { useState } from "react";
import {
  CloseBtn,
  CloseBtnContainer,
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

const FeedbackFormNoAuth = ({ onSendClick }) => {
  const [starSelected, setStarSelected] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleStarClick = (index) => {
    const updatedStars = starSelected.map((isSelected, i) => i <= index);
    setStarSelected(updatedStars);
  };

  const handleClick = () => {
    onSendClick();
  };
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
        <InputWrapper>
          <FormTextarea
            type="text"
            placeholder="What is your opinion on the quiz"
          />
          <SendBtn onClick={handleClick}>Send</SendBtn>
        </InputWrapper>
      </FormContainer>
    </>
  );
};

export default FeedbackFormNoAuth;
