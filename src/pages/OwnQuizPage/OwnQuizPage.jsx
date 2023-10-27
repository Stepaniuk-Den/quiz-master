//import { useLocation } from "react-router";
import QuizeFilterTools from "../../modules/ownQuizPage/components/QuizFilterTools/QuizFilterTools";
import BtnLoadMore from "../../shared/Buttons/BtnLoadMore/BtnLoadMore";
import PageTopBar from "../../shared/PageTopBar/PageTopBar";
import QuizesList from "../../shared/QuizesList/QuizesList";
import { PageWrapper, SectionWrapper } from "./OwnQuizePageStyled";

const OwnQuizPage = () => {
  //const location = useLocation();
  // console.log("locationDiscovery", location);

  return (
    <PageWrapper>
      <SectionWrapper>
        <PageTopBar titlePage="My quiz" />
        <QuizeFilterTools />
        <QuizesList />
        <BtnLoadMore />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default OwnQuizPage;
