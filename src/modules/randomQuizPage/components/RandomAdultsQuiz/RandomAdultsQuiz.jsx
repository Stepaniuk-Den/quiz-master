import React, { useEffect, useState } from "react";
import PageTitle from "../../../../shared/components/PageTitle/PageTitle";
import Paragraph from "../../../../shared/components/Paragraph/Paragraph";
import QuizesList from "../../../../shared/components/QuizesList/QuizesList";
import BtnLoadMore from "../../../../shared/components/Buttons/BtnLoadMore/BtnLoadMore";
import {
  RandomABtnWrapper,
  RandomAPageDesc,
  RandomAPageWrapper,
  RandomASectionWrapper,
} from "./RandomAdults&ChildrenQuizStyled";
import { useDispatch } from "react-redux";
//import { selectRandomAdult } from "../../../../redux/selectors";
import { getRandomQuizzesThunk } from "../../../../redux/quiz/quizThunks";

const RandomAdultsQuiz = ({ adultsRandomQuizzes }) => {
  const dispatch = useDispatch();
  //const [page, setPage] = useState(1);
  const [visibleQuizzes, setVisibleQuizzes] = useState(7);
  //const randomAdultsQuizzes = useSelector(selectRandomAdult);

  useEffect(() => {
    if (adultsRandomQuizzes.length === 0) {
      dispatch(getRandomQuizzesThunk({ audience: "adults", limit: 8 }));
    }
  }, [dispatch, adultsRandomQuizzes]);

  useEffect(() => {
    dispatch(getRandomQuizzesThunk({ audience: "adults", limit: 8 }));
  }, [dispatch]);

  const loadMore = () => {
    //setPage((page) => page + 1);
    setVisibleQuizzes(visibleQuizzes + 8);
    console.log("u cliked Load more btn");
  };

  // const filter = (quizzes) => {
  //   const uniqueQuizzes = [];
  //   const seenIds = new Set();

  //   for (const randomQuiz of quizzes) {
  //     if (!seenIds.has(randomQuiz._id)) {
  //       uniqueQuizzes.push(randomQuiz);
  //       seenIds.add(randomQuiz._id);
  //     }
  //   }
  //   return uniqueQuizzes;
  // };
  // const uniqueAdultsRandomQuizzes = filter(adultsRandomQuizzes);
  // console.log(uniqueAdultsRandomQuizzes);
  // const shouldLoadMore = uniqueAdultsRandomQuizzes?.length < 7;

  return (
    <RandomAPageWrapper>
      <PageTitle>For Adults</PageTitle>
      <RandomAPageDesc>
        <Paragraph>
          Dive deep into a world of intriguing quizzes tailored for adults. From
          cinema to logic, challenge your knowledge and discover where your
          expertise lies. Explore a diverse range of topics and test the depths
          of your knowledge.
        </Paragraph>
      </RandomAPageDesc>
      <RandomASectionWrapper>
        <QuizesList quizzesArr={adultsRandomQuizzes.slice(0, visibleQuizzes)} />
        <RandomABtnWrapper>
          {/* {shouldLoadMore ? null : <BtnLoadMore handleLoadMore={loadMore} />} */}
          <BtnLoadMore handleLoadMore={loadMore} />
        </RandomABtnWrapper>
      </RandomASectionWrapper>
    </RandomAPageWrapper>
  );
};

export default RandomAdultsQuiz;
