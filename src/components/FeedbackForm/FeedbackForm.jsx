import {
  FormContainer,
  FormTextarea,
  FormWrapper,
  InputWrapper,
  RatingWrapper,
  SendBtn,
  TextRating,
} from "./FeedbackFormStyled";

const FeedbackForm = ({ onSendClick }) => {
  const handleClick = () => {
    onSendClick();
  };
  return (
    <>
      <FormContainer>
        <FormWrapper>
          <RatingWrapper>
            <TextRating>Rating</TextRating>
            <h3>*****</h3>
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
