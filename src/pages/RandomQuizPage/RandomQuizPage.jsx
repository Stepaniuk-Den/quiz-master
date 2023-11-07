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

  //==============================================//
  const [visibleQuizzes, setVisibleQuizzes] = useState(7);
  const [adultsPage, setAdultsPage] = useState(1);
  const [childrenPage, setChildrenPage] = useState(1);
  //==============================================//

  const randomAdultsQuizzes = useSelector(selectRandomAdult);
  const randomChildrenQuizzes = useSelector(selectRandomChildren);

  const filter = (quizzes) => {
    const uniqueQuizzes = [];
    const seenIds = new Set();

    for (const randomQuiz of quizzes) {
      if (!seenIds.has(randomQuiz._id)) {
        uniqueQuizzes.push(randomQuiz);
        seenIds.add(randomQuiz._id);
      }
    }
    return uniqueQuizzes;
  };

  const uniqueAdultsRandomQuizzes = filter(randomAdultsQuizzes);
  const uniqueChildrenRandomQuizzes = filter(randomChildrenQuizzes);
  //console.log(uniqueAdultsRandomQuizzes);
  //console.log(uniqueChildrenRandomQuizzes);

  // useEffect(() => {
  //   if (randomAdultsQuizzes.length === 0 || randomChildrenQuizzes === 0) {
  //     dispatch(getRandomQuizzesThunk({ page: 1, limit: 8 }));
  //   }
  // }, [dispatch, randomAdultsQuizzes, randomChildrenQuizzes]);

  useEffect(() => {
    if (randomAdultsQuizzes.length === 0) {
      dispatch(
        getRandomQuizzesThunk({ audience: "adults", page: 1, limit: 8 })
      );
    }
  }, [dispatch, randomAdultsQuizzes]);

  useEffect(() => {
    if (randomChildrenQuizzes.length === 0) {
      dispatch(
        getRandomQuizzesThunk({ audience: "children", page: 1, limit: 8 })
      );
    }
  }, [dispatch, randomChildrenQuizzes]);

  useEffect(() => {
    if (adultsPage > 1) {
      dispatch(
        getRandomQuizzesThunk({
          audience: "adults",
          page: adultsPage,
          limit: 8,
        })
      );
    }
  }, [dispatch, adultsPage]);

  useEffect(() => {
    if (childrenPage > 1) {
      dispatch(
        getRandomQuizzesThunk({
          audience: "children",
          page: childrenPage,
          limit: 8,
        })
      );
    }
  }, [dispatch, childrenPage]);

  const adultsLoadMore = () => {
    setAdultsPage((page) => page + 1);
    setVisibleQuizzes(visibleQuizzes + 8);
    console.log("u cliked Load more btn");
  };

  const childrenLoadMore = () => {
    setChildrenPage((page) => page + 1);
    setVisibleQuizzes(visibleQuizzes + 8);
    console.log("u cliked Load more btn");
  };

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
        {adultsRoute && (
          <RandomQuiz
            adultsQuiz={uniqueAdultsRandomQuizzes.slice(0, visibleQuizzes)}
          />
        )}
        {childrenRoute && (
          <RandomQuiz
            childrenQuiz={uniqueChildrenRandomQuizzes.slice(0, visibleQuizzes)}
          />
        )}
        <RandomBtnWrapper>
          {adultsRoute && <BtnLoadMore handleLoadMore={adultsLoadMore} />}
          {childrenRoute && <BtnLoadMore handleLoadMore={childrenLoadMore} />}
        </RandomBtnWrapper>
      </RandomSectionWrapper>
    </RandomPageWrapper>
  );
};

export default RandomQuizPage;
