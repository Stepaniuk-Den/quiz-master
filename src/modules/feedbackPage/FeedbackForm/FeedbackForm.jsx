import { useState } from "react";
import {
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

const FeedbackForm = ({ onSendClick }) => {
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
        <FormWrapper>
          <RatingWrapper>
            <TextRating>Rating</TextRating>
            {starSelected.map((isSelected, index) => (
              <StarBtn key={index} onClick={() => handleStarClick(index)}>
                <RateStar selected={isSelected} />
              </StarBtn>
            ))}
          </RatingWrapper>
          <InputWrapper>
            <FormTextarea
              type="text"
              placeholder="Write your opinion or wish for the service"
            />
            <SendBtn onClick={handleClick}>Send</SendBtn>
          </InputWrapper>
        </FormWrapper>
      </FormContainer>
    </>
  );
};

export default FeedbackForm;
