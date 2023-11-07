//import React, { useEffect, useState } from "react";
//import PageTitle from "../../shared/components/PageTitle/PageTitle";
// import {
//   RandomBtnWrapper,
//   RandomPageDesc,
//   RandomPageWrapper,
//   RandomSectionWrapper,
// } from "./RandomQuizPageStyled";
import { useSelector } from "react-redux";
import { selectRandomAdult, selectRandomChildren } from "../../redux/selectors";
import { useParams } from "react-router-dom";
//import Paragraph from "../../shared/components/Paragraph/Paragraph";
//import RandomQuiz from "../../modules/randomQuizPage/components/RandomQuiz";
//import { getRandomQuizzesThunk } from "../../redux/quiz/quizThunks";
//import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore";
import RandomAdultsQuiz from "../../modules/randomQuizPage/components/RandomAdultsQuiz/RandomAdultsQuiz";
import RandomChildrenQuiz from "../../modules/randomQuizPage/components/RandomChildrenQuiz/RandomChildrenQuiz";

const RandomQuizPage = () => {
  const { ageType } = useParams();
  //const dispatch = useDispatch();
  const adultsRoute = ageType === "Adults";
  const childrenRoute = ageType === "Children";

  const randomAdultsQuizzes = useSelector(selectRandomAdult);
  const randomChildrenQuizzes = useSelector(selectRandomChildren);

  return (
    <>
      {adultsRoute && (
        <RandomAdultsQuiz adultsRandomQuizzes={randomAdultsQuizzes} />
      )}
      {childrenRoute && (
        <RandomChildrenQuiz childrenRandomQuizzes={randomChildrenQuizzes} />
      )}
      ; ;
    </>
  );
};

export default RandomQuizPage;
