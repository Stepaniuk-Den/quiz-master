import React, { useEffect, useState } from "react";
import PageTitle from "../../shared/components/PageTitle/PageTitle";
import {
  RandomBtnWrapper,
  RandomPageDesc,
  RandomPageWrapper,
  RandomSectionWrapper,
} from "./RandomQuizPageStyled";
import { useDispatch, useSelector } from "react-redux";
import { selectRandomAdult, selectRandomChildren } from "../../redux/selectors";
//import QuizesList from "../../shared/components/QuizesList/QuizesList";
import { useParams } from "react-router-dom";
import Paragraph from "../../shared/components/Paragraph/Paragraph";
import RandomQuiz from "../../modules/randomQuizPage/components/RandomQuiz";
import { getRandomQuizzesThunk } from "../../redux/quiz/quizThunks";
import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore";

const RandomQuizPage = () => {
  const { ageType } = useParams();
  const dispatch = useDispatch();
  const adultsRoute = ageType === "Adults";
  const childrenRoute = ageType === "Children";
  const [visibleQuizzes, setVisibleQuizzes] = useState(7);
  const [page, setPage] = useState(1);
  // const [childrenRandom, setChildrenRandom] = useState([]);
  // const [adultsRandom, setAdultsRandom] = useState([]);

  // useEffect(() => {
  //   const adultsData = dispatch(
  //     getRandomQuizzesThunk({ audience: "adults", page: 1, limit: 8 })
  //   );
  //   selectRandomAdult(adultsData);
  // });

  // console.log(adultsRandom);

  const randomAdultsQuizzes = useSelector(selectRandomAdult);
  const randomChildrenQuizzes = useSelector(selectRandomChildren);

  useEffect(() => {
    if (randomAdultsQuizzes.length === 0 || randomChildrenQuizzes === 0) {
      dispatch(getRandomQuizzesThunk({ page: page, limit: 8 }));
    }
  }, [dispatch, randomAdultsQuizzes, randomChildrenQuizzes, page]);

  // const NewQuizzes = () => {
  //   useEffect(() => {
  //     dispatch(getRandomQuizzesThunk({ page: page, limit: 4 }));
  //   }, [dispatch, page]);
  // };

  // useEffect(() => {
  //   if (randomAdultsQuizzes.length === 0) {
  //     dispatch(
  //       getRandomQuizzesThunk({ audience: "adults", page: 1, limit: 8 })
  //     );
  //   }
  // }, [dispatch, randomAdultsQuizzes]);

  // useEffect(() => {
  //   if (randomChildrenQuizzes.length === 0) {
  //     dispatch(
  //       getRandomQuizzesThunk({ audience: "children", page: 1, limit: 8 })
  //     );
  //   }
  // }, [dispatch, randomChildrenQuizzes]);

  // useEffect(() => {
  //   if (randomAdultsQuizzes.length === 0) {
  //     dispatch(
  //       getRandomQuizzesThunk({ audience: "adults", page: 1, limit: 8 })
  //     );
  //   } else if (randomChildrenQuizzes.length === 0) {
  //     dispatch(
  //       getRandomQuizzesThunk({ audience: "chhildren", page: 1, limit: 8 })
  //     );
  //   }
  // }, [dispatch, randomAdultsQuizzes, randomChildrenQuizzes]);

  const loadMore = () => {
    setPage((page) => page + 1);
    setVisibleQuizzes(visibleQuizzes + 8);
    console.log("u cliked Load more btn");
  };
  console.log(page);
  //console.log("random-adults =>", randomAdultsQuizzes);
  //console.log("random-children =>", randomChildrenQuizzes);
  return (
    <RandomPageWrapper>
      <PageTitle>For {ageType}</PageTitle>
      <RandomPageDesc>
        {adultsRoute && (
          <Paragraph>
            Dive deep into a world of intriguing quizzes tailored for adults.
            From cinema to logic, challenge your knowledge and discover where
            your expertise lies. Explore a diverse range of topics and test the
            depths of your knowledge.
          </Paragraph>
        )}
        {childrenRoute && (
          <Paragraph>
            Engaging and fun quizzes designed specifically for kids. Dive into a
            world of colorful questions on movies, music, and much more. Perfect
            for young curious minds! A safe space for children to learn, play,
            and grow their knowledge.
          </Paragraph>
        )}
      </RandomPageDesc>
      <RandomSectionWrapper>
        {/* <QuizesList quizzesArr={randomChildrenQuiz} /> */}
        {adultsRoute && (
          <RandomQuiz
            adultsQuiz={randomAdultsQuizzes.slice(0, visibleQuizzes)}
          />
        )}
        {childrenRoute && (
          <RandomQuiz
            childrenQuiz={randomChildrenQuizzes.slice(0, visibleQuizzes)}
          />
        )}
        <RandomBtnWrapper>
          <BtnLoadMore handleLoadMore={loadMore} />
        </RandomBtnWrapper>
      </RandomSectionWrapper>
    </RandomPageWrapper>
  );
};

export default RandomQuizPage;
