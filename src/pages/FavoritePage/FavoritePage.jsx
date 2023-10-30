//import { useLocation } from "react-router";
import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore";
import { PageWrapper, SectionWrapper } from "./FavoritePageStyled";
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar";
import QuizesList from "../../shared/components/QuizesList/QuizesList";
import QuizeFilterTools from "../../modules/favoritePage/components/QuizFilterTools/QuizFilterTools";
import { quizNames } from "../../shared/components/QuizesList/quizNames";
import { useState } from "react";

const FavoritePage = () => {
  //const location = useLocation();  
  const newQuizCategoriesNames = quizNames.map((name) => name.quizCategory);
  // console.log(newQuizCategoriesNames);
  const [quizCategoriesNameArr, setQuizCategoriesNameArr] = useState(newQuizCategoriesNames);
  const filteredQuizeCards = (filteredNames) => {
    setQuizCategoriesNameArr(filteredNames);
  };

  // console.log("quizCategoriesNameArr", quizCategoriesNameArr);

  return (
    <PageWrapper>
      <SectionWrapper>
        <PageTopBar titlePage="Favorite quize" />
        <QuizeFilterTools filteredQuizeCards={filteredQuizeCards} />
        <QuizesList quizCategoriesNameArr={quizCategoriesNameArr} />
        <BtnLoadMore />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default FavoritePage;
