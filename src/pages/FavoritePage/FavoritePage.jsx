import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFavoriteQuizzesThunk,
  updateFavoriteQuizThunk,
} from "../../redux/quiz/quizThunks";
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
    dispatch(getFavoriteQuizzesThunk());
  }, [dispatch]);

  const allFavoriteQuizes = useSelector(selectFavorite);
  const [favoriteQuizesArr, setFavoriteQuizesArr] = useState(allFavoriteQuizes);
  console.log('favoriteQuizesArr: ', favoriteQuizesArr);
  
  useEffect(() => {
    setFavoriteQuizesArr(allFavoriteQuizes);
  }, [allFavoriteQuizes]);

  const filteredQuizeCards = (name) => {
    const filteredNames = allFavoriteQuizes.filter((quiz) =>
      quiz?.quizName?.includes(name)
    );
    setFavoriteQuizesArr(filteredNames);
  };

  const updateFavoriteQuizes = (evt) => {
    const id = evt.currentTarget.id
    const quizId = {
      favorites: id,
    };
    dispatch(updateFavoriteQuizThunk(quizId));
    const updatedFavorite = favoriteQuizesArr.filter((quiz) => quiz._id !== id);
    dispatch(updateFavorite(updatedFavorite));
  };

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
