import { useDispatch, useSelector } from "react-redux";
import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore"
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar"
import QuizesList from "../../shared/components/QuizesList/QuizesList"
import { selectPassed } from "../../redux/selectors";
import { ContainerLastPassed } from "./LastQuizesPageStyled";
import { getPassedQuizzesThunk } from "../../redux/quiz/quizThunks";
import { useEffect } from "react";

const LastQuizesPage = () => {
  const dispatch = useDispatch()
  const [passedQuizzes] = useSelector(selectPassed);

    //  useEffect(() => {
     
    //     dispatch(getPassedQuizzesThunk())

    // }, [dispatch, passedQuizzes]);
  return (
    <ContainerLastPassed>
      <PageTopBar titlePage="Last passed quizzes" />
      <QuizesList quizzesArr={passedQuizzes} />
      <BtnLoadMore/>
    </ContainerLastPassed>
  )
}

export default LastQuizesPage

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import BtnLoadMore from '../../shared/components/Buttons/BtnLoadMore/BtnLoadMore';
// import PageTopBar from '../../shared/components/PageTopBar/PageTopBar';
// import QuizesList from '../../shared/components/QuizesList/QuizesList';
// import { ContainerLastPassed } from './LastQuizesPageStyled';
// import { selectPassed } from '../../redux/selectors';

// const LastQuizesPage = () => {
// const testPassedQuizzes = useSelector(selectPassed);

//   const dispatch = useDispatch();
//   const [loadedQuizzes, setLoadedQuizzes] = useState([]);
//   const [visibleQuizzes, setVisibleQuizzes] = useState([]);
//   const [loadMore, setLoadMore] = useState(false);

//   useEffect(() => {
//     const initialQuizzes = testPassedQuizzes.slice(0, 8);
//     setLoadedQuizzes(testPassedQuizzes);
//     setVisibleQuizzes(initialQuizzes);

//     if (testPassedQuizzes.length > 8) {
//       setLoadMore(true);
//     }
//   }, []);

//   const handleLoadMore = () => {
//     const startIndex = visibleQuizzes.length;
//     const endIndex = startIndex + 8;
//     const nextQuizzes = loadedQuizzes.slice(startIndex, endIndex);

//     if (nextQuizzes.length > 0) {
//       setVisibleQuizzes([...visibleQuizzes, ...nextQuizzes]);
//     }

//     if (endIndex >= testPassedQuizzes.length) {
//       setLoadMore(false); 
//     }
//   };

//   return (
//     <ContainerLastPassed>
//       <PageTopBar titlePage="Last passed quizzes" />
//       <QuizesList quizzesArr={visibleQuizzes} />
//       {loadMore && <BtnLoadMore handleLoadMore={handleLoadMore} />}
//     </ContainerLastPassed>
//   );
// };

// export default LastQuizesPage;
