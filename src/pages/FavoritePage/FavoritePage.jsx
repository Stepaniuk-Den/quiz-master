import { useEffect, useMemo, useState } from "react";
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

const FavoritePage = () => {
  // console.log("render");
  const dispatch = useDispatch();
  const allFavoriteQuizes = useSelector(selectFavorite);  
  console.log('allFavoriteQuizes: ', allFavoriteQuizes);
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState("");    
  let page = 1;

  useEffect(() => {
    dispatch(getFavoriteQuizzesThunk({setTotal}));
  }, [dispatch]);

  const filteredQuizeCards = useMemo(() => {
    return allFavoriteQuizes.filter((quiz) =>
      quiz.quizName?.includes(search)
    );    
  }, [search, allFavoriteQuizes])

  const updateFavoriteQuizes = (evt) => {
    const id = evt.currentTarget.id;
    const quizId = {
      favorites: id,
    };
    dispatch(updateFavoriteQuizThunk({quizId, setTotal}));    
  };

  const handleLoadMore = () => {    
    page += 1;
    dispatch(getFavoriteQuizzesThunk({page, setTotal}));
  };

  return (
    <PageWrapper>
      <SectionWrapper>
        <PageTopBar titlePage="Favorite quize" />
        <QuizeFilterTools          
          search={search}
          setSearch={setSearch}
        />
        <QuizesList
          quizzesArr={filteredQuizeCards}
          className={"bottomVariant"}
          updateFavoriteQuizes={updateFavoriteQuizes}
        />
        {total > 8 && <BtnLoadMore handleLoadMore={handleLoadMore} />}
      </SectionWrapper>
    </PageWrapper>
  );
};

export default FavoritePage;
