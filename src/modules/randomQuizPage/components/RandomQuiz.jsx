import React from "react";
import QuizesList from "../../../shared/components/QuizesList/QuizesList";
import CreateQuizCard from "./CreateQuizCard/CreateQuizCard";
import EmptyBlock from "../../../shared/components/EmptyBlock/EmptyBlock";
//import BtnLoadMore from "../../../shared/components/Buttons/BtnLoadMore/BtnLoadMore";

const RandomQuiz = ({ adultsQuiz, childrenQuiz }) => {
  //console.log("children quiz =>", childrenQuiz);
  //console.log("adults quiz =>", adultsQuiz);
  return (
    <>
      <div>
        <CreateQuizCard />
      </div>
      {adultsQuiz?.length === 0 && (
        <EmptyBlock>No available quizzes</EmptyBlock>
      )}
      {adultsQuiz?.length > 0 && <QuizesList quizzesArr={adultsQuiz} />}
      {childrenQuiz?.length === 0 && (
        <EmptyBlock>No available quizzes</EmptyBlock>
      )}
      {childrenQuiz?.length > 0 && <QuizesList quizzesArr={childrenQuiz} />}

      {/* <BtnLoadMore /> */}
    </>
  );
};

export default RandomQuiz;
