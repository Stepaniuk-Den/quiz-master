//import { useLocation } from "react-router";
import QuizeFilterTools from "../../modules/ownQuizPage/components/QuizFilterTools/QuizFilterTools";
import BtnLoadMore from "../../shared/Buttons/BtnLoadMore/BtnLoadMore";
import PageTopBar from "../../shared/PageTopBar/PageTopBar";
import QuizesList from "../../shared/QuizesList/QuizesList";
import { PageWrapper, SectionWrapper } from "./OwnQuizePageStyled";
import {quizNames} from '../../shared/QuizesList/quizNames'
import { useState } from "react";

const OwnQuizPage = () => {
  //const location = useLocation();
  
  const newQuizCategoriesNames = quizNames.map((name) => name.quizCategory);
  // console.log(newQuizCategoriesNames);
  const [quizCategoriesNameArr, setQuizCategoriesNameArr] = useState(newQuizCategoriesNames);
  //const location = useLocation();
  // console.log("locationFavorite", location);
  const filteredQuizeCards = (filteredNames) => {    
    setQuizCategoriesNameArr(filteredNames);
  };

  // console.log("quizArr", quizArr);

  return (
    <PageWrapper>
      <SectionWrapper>
        <PageTopBar titlePage="My quiz" />
        <QuizeFilterTools filteredQuizeCards={filteredQuizeCards}/>
        <QuizesList quizCategoriesNameArr={quizCategoriesNameArr}/>
        <BtnLoadMore />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default OwnQuizPage;
