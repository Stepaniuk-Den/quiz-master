//import { useLocation } from "react-router";
import BtnCreateQuiz from "../../shared/Buttons/BtnCreateQuiz/BtnCreateQuiz";
import BtnLoadMore from "../../shared/Buttons/BtnLoadMore/BtnLoadMore";
import CardsAll from "../../shared/CardsAll/CardsAll";
// import {
//   PageWrapper,
//   SectionWrapper,
//   TitleIconBox,
//   TitleS,
// } from "./DiscoverPageStyled";
import { PageWrapper, SectionWrapper, TitleIconBox, TitleS } from "./OwnQuizePageStyled";
import FormFilterOwnQuiz from "./OwnQuizPageComponents/FormFilterOwnQuiz/FormFilterOwnQuiz";


const OwnQuizPage = () => {
  //const location = useLocation();
  // console.log("locationDiscovery", location);


  return (
    <PageWrapper>
      <SectionWrapper>
        <TitleIconBox>
          <TitleS>My quiz</TitleS>
          <BtnCreateQuiz />
        </TitleIconBox>
        <FormFilterOwnQuiz />
        <CardsAll />
        <BtnLoadMore />
      </SectionWrapper>
    </PageWrapper>
  )
}

export default OwnQuizPage