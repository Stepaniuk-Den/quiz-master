import {
  FormContainer,
  ThankYouText,
  ThankYouWrapper,
  ToMainPageBtn,
} from "./FeedbackThankYouStyled";

const FeedbackThankYou = () => {
  return (
    <>
      <FormContainer>
        <div>
          <img
            src="../../shared/images/desktop/feedback-desktop@1x.png"
            alt="Interesting img"
            width={160}
            height={160}
          />
        </div>
        <ThankYouWrapper>
          <ThankYouText>
            Thank you for your feedback, feedback is very important to us.
          </ThankYouText>
          <ToMainPageBtn>To main page</ToMainPageBtn>
        </ThankYouWrapper>
      </FormContainer>
    </>
  );
};

export default FeedbackThankYou;
