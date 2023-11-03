import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteQuizzesThunk } from "../../redux/quiz/quizThunks";
import { selectFavorite } from "../../redux/selectors";
import QuizeFilterTools from "../../modules/favoritePage/components/QuizFilterTools/QuizFilterTools";
import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore";
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar";
import QuizesList from "../../shared/components/QuizesList/QuizesList";
import { PageWrapper, SectionWrapper } from "./FavoritePageStyled";
import { updateFavorite } from "../../redux/quiz/quizSlice";

const FavoritePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("1");
    dispatch(getFavoriteQuizzesThunk());
  }, [dispatch]);

  const allFavoriteQuizes = useSelector(selectFavorite);
  const [favoriteQuizesArr, setFavoriteQuizesArr] = useState(allFavoriteQuizes);
  console.log('favoriteQuizesArr: ', favoriteQuizesArr);
  

  useEffect(() => {
    console.log("2");
    setFavoriteQuizesArr(allFavoriteQuizes);
  }, [allFavoriteQuizes]);

  const filteredQuizeCards = (name) => {
    const filteredCategoryNames = favoriteQuizesArr.filter((quiz) =>
      quiz?.categoryName?.toLowerCase().includes(name)
    );
    setFavoriteQuizesArr(filteredCategoryNames);
    
  };

  const updateFavoriteQuizes = (id) =>{    
    const updatedFavorite = favoriteQuizesArr.filter(quiz=> quiz._id !== id)        
    dispatch(updateFavorite(updatedFavorite))
  }

  const handleLoadMore = () => {
    console.log("BtnLoadMore");    
  };  

  return (
    <PageWrapper>
      <SectionWrapper>
        <PageTopBar titlePage="Favorite quize" />
        <QuizeFilterTools filteredQuizeCards={filteredQuizeCards} />
        <QuizesList
          quizzesArr={favoriteQuizesArr}
          className={"bottomVariant"}
          updateFavoriteQuizes={updateFavoriteQuizes}          
        />
        <BtnLoadMore handleLoadMore={handleLoadMore} />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default FavoritePage;
