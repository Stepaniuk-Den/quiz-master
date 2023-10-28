import { useState } from "react";
import FeedbackForm from "../../modules/feedbackPage/FeedbackForm/FeedbackForm";
import FeedbackThankYou from "../../modules/feedbackPage/FeedbackThankYou/FeedbackThankYou";
// import FeedbackFormNoAuth from "../../modules/feedbackPage/FeedbackFormNoAuth/FeedbackFormNoAuth";
// import FeedbackThankYouNoAuth from "../../modules/feedbackPage/FeedbackThankYouNoAuth/FeedbackThankYouNoAuth";
import {
  PageWrapper,
  SectionWrapper,
  TitleS,
  TitleWrapper,
} from "./FeedbackPageStyled";

const FeedbackPage = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSendBtnClick = () => {
    setShowThankYou(true);
  };

  return (
    <PageWrapper>
      <SectionWrapper>
        <TitleWrapper>
          <button
            style={{
              color: "#000000",
              fontFamily: "Roboto",
              fontSize: 16,
              width: 42,
              marginBottom: 16,
            }}
          >
            Back
          </button>
          <TitleS>Feedback</TitleS>
        </TitleWrapper>
        {showThankYou ? (
          <FeedbackThankYou />
        ) : (
          <FeedbackForm onSendClick={handleSendBtnClick} />
        )}

        {/* {showThankYou ? (
          <FeedbackThankYouNoAuth />
        ) : (
          <FeedbackFormNoAuth onSendClick={handleSendBtnClick} />
        )} */}
      </SectionWrapper>
    </PageWrapper>
  );
};

export default FeedbackPage;
