import { useState } from "react";
import FeedbackForm from "../../modules/feedbackPage/FeedbackForm/FeedbackForm";
import FeedbackThankYou from "../../modules/feedbackPage/FeedbackThankYou/FeedbackThankYou";
import FeedbackFormNoAuth from "../../modules/feedbackPage/FeedbackFormNoAuth/FeedbackFormNoAuth";
import FeedbackThankYouNoAuth from "../../modules/feedbackPage/FeedbackThankYouNoAuth/FeedbackThankYouNoAuth";
import {
  PageWrapper,
  SectionWrapper,
  TitleWrapper,
} from "./FeedbackPageStyled";
import GoBackBtn from "../../shared/components/Buttons/GoBackBtn/GoBackBtn";
import PageTitle from "../../shared/components/PageTitle/PageTitle";

const FeedbackPage = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSendBtnClick = () => {
    setShowThankYou(true);
  };

  return (
    <PageWrapper>
      <SectionWrapper>
        <TitleWrapper>
          <GoBackBtn />
          <PageTitle children="Feedback" />
        </TitleWrapper>
        {showThankYou ? (
          <FeedbackThankYou />
        ) : (
          <FeedbackForm onSendClick={handleSendBtnClick} />
        )}
        
        {/* 
        {showThankYou ? (
          <FeedbackThankYouNoAuth />
        ) : (
          <FeedbackFormNoAuth onSendClick={handleSendBtnClick} />
        )} */}
      </SectionWrapper>
    </PageWrapper>
  );
};

export default FeedbackPage;
