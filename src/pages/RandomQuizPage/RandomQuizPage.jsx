import React from "react";
import { useSelector } from "react-redux";
import { selectRandomAdult, selectRandomChildren } from "../../redux/selectors";
import { useParams } from "react-router-dom";

const RandomQuizPage = () => {
  //   const randomQuizAdults = useSelector(selectRandomAdult);
  //   const randomQuizChildren = useSelector(selectRandomChildren);

  //   const { type } = useParams();
  //const randomPage = type === 'children'?
  //console.log(randomQuizAdults);
  return <div>RandomQuizPage</div>;
};

export default RandomQuizPage;
