import {
  CloseBtn,
  CloseBtnContainer,
  FormContainer,
  FormTextarea,
  FormTitle,
  InputWrapper,
  NameInput,
  RatingWrapper,
  SendBtn,
  TextRating,
} from "./FeedbackFormNoAuthStyled";

const FeedbackFormNoAuth = ({ onSendClick }) => {
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
            <h3>*****</h3>
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
