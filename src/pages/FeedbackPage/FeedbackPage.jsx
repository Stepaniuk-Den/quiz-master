import { useState } from "react";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";
import FeedbackThankYou from "../../components/FeedbackThankYou/FeedbackThankYou";
import {
  PageWrapper,
  SectionWrapper,
  TitleS,
  TitleWrapper,
} from "./FeedbackPageStyled";
// import FeedbackFormNoAuth from "../../components/FeedbackFormNoAuth/FeedbackFormNoAuth";
// import FeedbackThankYouNoAuth from "../../components/FeedbackThankYouNoAuth/FeedbackThankYouNoAuth";

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
        {/* <FeedbackFormNoAuth /> */}
        {/* <FeedbackThankYouNoAuth/> */}
      </SectionWrapper>
    </PageWrapper>
  );
};

export default FeedbackPage;
