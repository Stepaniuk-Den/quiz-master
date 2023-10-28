import {
  CloseBtn,
  CloseBtnContainer,
  FormContainer,
  FormWrapper,
  TextThanks,
  TitleThanks,
  ToMainPageBtn,
} from "./FeedbackThankYouNoAuthStyled";

const FeedbackThankYouNoAuth = () => {
  return (
    <>
      <FormContainer>
        <CloseBtnContainer>
          <CloseBtn />
        </CloseBtnContainer>
          <TitleThanks>Thank you</TitleThanks>
        <FormWrapper>
          <TextThanks>
            for your feedback, feedback is very important to us.
          </TextThanks>
          <ToMainPageBtn>To main page</ToMainPageBtn>
        </FormWrapper>
      </FormContainer>
    </>
  );
};

export default FeedbackThankYouNoAuth;
