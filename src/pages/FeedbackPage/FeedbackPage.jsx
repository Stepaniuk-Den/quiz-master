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
import { selectIsAuth } from "../../redux/user/userSelectors";
import { useSelector } from "react-redux";

const FeedbackPage = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const user = useSelector(selectIsAuth);

  const handleSendBtnClick = () => {
    setShowThankYou(true);
  };

  return (
    <PageWrapper>
      <SectionWrapper>
        <TitleWrapper>
          {user ? <GoBackBtn to="/" /> : null}
          {user ? <PageTitle children="Feedback" /> : null}
        </TitleWrapper>
        {showThankYou ? (
          user ? (
            <FeedbackThankYou />
          ) : (
            <FeedbackThankYouNoAuth />
          )
        ) : user ? (
          <FeedbackForm onSendClick={handleSendBtnClick} />
        ) : (
          <FeedbackFormNoAuth onSendClick={handleSendBtnClick} />
        )}
      </SectionWrapper>
    </PageWrapper>
  );
};

export default FeedbackPage;
