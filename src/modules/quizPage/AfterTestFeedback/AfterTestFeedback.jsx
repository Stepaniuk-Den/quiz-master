import { Link, useLocation, useNavigate } from "react-router-dom";
import { CloseBtn, CloseBtnContainer, FormContainer, FormWrapper, SplashImg, TextThanks, TitleThanks, ToMainPageBtn } from "./AfterTestFeedbackStyled";
import backgroundImg from "../../../shared/images/desktop/question-desktop@2x.png";
import { useRef } from "react";


const AfterTestFeedback = ({ to }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = useRef(location.state?.from);

  const handleClick = () => {
    // if (to) {
    //   navigate(to);
    // } else {
    //   navigate(-1);
    // }
    navigate(backLink.current ?? "/");
  };
  return (
    <>
      <SplashImg src={backgroundImg} alt="splash" loading="lazy" />
      <FormContainer>
        <CloseBtnContainer onClick={handleClick}>
          <CloseBtn />
        </CloseBtnContainer>
        <TitleThanks>Thank you</TitleThanks>
        <FormWrapper>
          <TextThanks>
            for your feedback, feedback is very important to us.
          </TextThanks>
          <Link to="/">
            <ToMainPageBtn>To main page</ToMainPageBtn>
          </Link>
        </FormWrapper>
      </FormContainer>
    </>
  );
};

export default AfterTestFeedback;
