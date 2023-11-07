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
} from "../RandomAdultsQuiz/RandomAdults&ChildrenQuizStyled";
import { useDispatch } from "react-redux";
//import { selectRandomChildren } from "../../../../redux/selectors";
import { getRandomQuizzesThunk } from "../../../../redux/quiz/quizThunks";

const RandomChildrenQuiz = ({ childrenRandomQuizzes }) => {
  const dispatch = useDispatch();
  //const [page, setPage] = useState(1);
  const [visibleQuizzes, setVisibleQuizzes] = useState(7);
  //const randomChildrenQuizzes = useSelector(selectRandomChildren);

  useEffect(() => {
    if (childrenRandomQuizzes.length === 0) {
      dispatch(getRandomQuizzesThunk({ audience: "children", limit: 8 }));
    }
  }, [dispatch, childrenRandomQuizzes]);

  useEffect(() => {
    dispatch(getRandomQuizzesThunk({ audience: "children", limit: 8 }));
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
  // const uniqueChildrenRandomQuizzes = filter(childrenRandomQuizzes);

  return (
    <RandomAPageWrapper>
      <PageTitle>For Children</PageTitle>
      <RandomAPageDesc>
        <Paragraph>
          Engaging and fun quizzes designed specifically for kids. Dive into a
          world of colorful questions on movies, music, and much more. Perfect
          for young curious minds! A safe space for children to learn, play, and
          grow their knowledge.
        </Paragraph>
      </RandomAPageDesc>
      <RandomASectionWrapper>
        <QuizesList
          quizzesArr={childrenRandomQuizzes.slice(0, visibleQuizzes)}
        />
        <RandomABtnWrapper>
          <BtnLoadMore handleLoadMore={loadMore} />
        </RandomABtnWrapper>
      </RandomASectionWrapper>
    </RandomAPageWrapper>
  );
};

export default RandomChildrenQuiz;
