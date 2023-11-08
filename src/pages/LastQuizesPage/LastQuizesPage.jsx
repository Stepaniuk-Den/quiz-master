import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore"
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar"
import QuizesList from "../../shared/components/QuizesList/QuizesList"
import { ContainerBtn, ContainerLastPassed } from "./LastQuizesPageStyled";
import { getPassedQuizzesThunk } from "../../redux/quiz/quizThunks";
import { selectPassed } from '../../redux/selectors';

const LastQuizesPage = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const limitPerPage = 8;
    const passedQuizzes = useSelector(selectPassed);

  useEffect(() => {
    if (passedQuizzes.length === 0) {
      dispatch(getPassedQuizzesThunk({ page: 1, limit: limitPerPage }));
    }
  }, [dispatch, passedQuizzes]);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };
  //   useEffect(() => {
  //       dispatch(getPassedQuizzesThunk({ page: currentPage, limit: limitPerPage }));
       
  // }, [dispatch, passedQuizzes]);  

  
  
  return (
    <ContainerLastPassed>
      <PageTopBar titlePage="Last passed quizzes" />
    
      <QuizesList quizzesArr={passedQuizzes.data} />
        <ContainerBtn>
      {passedQuizzes.length % limitPerPage === 0 && (
        <BtnLoadMore handleLoadMore={handleLoadMore} />
      )}
      </ContainerBtn>
      
    </ContainerLastPassed>
  );
}

export default LastQuizesPage;
