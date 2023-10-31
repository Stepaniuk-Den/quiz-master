import { useState } from "react";
import { useSelector } from "react-redux";
import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore";
import { PageWrapper, SectionWrapper } from "./FavoritePageStyled";
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar";
import QuizesList from "../../shared/components/QuizesList/QuizesList";
import QuizeFilterTools from "../../modules/favoritePage/components/QuizFilterTools/QuizFilterTools";
import { selectFavorite } from "../../redux/selectors";

const FavoritePage = () => {
  const allFavoriteQuizes = useSelector(selectFavorite)
  const [favoriteQuizesArr, setFavoriteQuizesArr] = useState(allFavoriteQuizes);

  const filteredQuizeCards = (filteredNames) => {
    setFavoriteQuizesArr(filteredNames);
  };

  const handleLoadMore = () => {
    console.log("BtnLoadMore");
  };
  
  return (
    <PageWrapper>
      <SectionWrapper>
        <PageTopBar titlePage="Favorite quize" />
        <QuizeFilterTools filteredQuizeCards={filteredQuizeCards} />        
        <QuizesList quizzesArr={favoriteQuizesArr} className={"bottomVariant"}/>
        <BtnLoadMore handleLoadMore={handleLoadMore}/>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default FavoritePage;
