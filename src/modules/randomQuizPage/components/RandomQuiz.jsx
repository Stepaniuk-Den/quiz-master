import React from "react";
import QuizesList from "../../../shared/components/QuizesList/QuizesList";
import EmptyBlock from "../../../shared/components/EmptyBlock/EmptyBlock";

const RandomQuiz = ({ adultsQuiz, childrenQuiz }) => {
  return (
    <>
      {adultsQuiz?.length === 0 && (
        <EmptyBlock>No available quizzes</EmptyBlock>
      )}
      {adultsQuiz?.length > 0 && <QuizesList quizzesArr={adultsQuiz} />}
      {childrenQuiz?.length === 0 && (
        <EmptyBlock>No available quizzes</EmptyBlock>
      )}
      {childrenQuiz?.length > 0 && <QuizesList quizzesArr={childrenQuiz} />}
    </>
  );
};

export default RandomQuiz;
