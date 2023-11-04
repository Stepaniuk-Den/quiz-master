import React, { useEffect } from "react";
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
  const adults = ageType === "Adults";
  const children = ageType === "Children";

  const randomAdultsQuizzes = useSelector(selectRandomAdult);
  const randomChildrenQuizzes = useSelector(selectRandomChildren);

  useEffect(() => {
    if (randomAdultsQuizzes.length === 0 || randomChildrenQuizzes === 0) {
      dispatch(getRandomQuizzesThunk({ page: 1, limit: 8 }));
    }
  }, [dispatch, randomAdultsQuizzes, randomChildrenQuizzes]);

  const loadMore = () => {
    console.log("u cliked Load more btn");
  };
  //console.log("random-adults =>", randomAdultsQuizzes);
  //console.log("random-children =>", randomChildrenQuizzes);
  return (
    <RandomPageWrapper>
      <PageTitle>For {ageType}</PageTitle>
      <RandomPageDesc>
        {adults && (
          <Paragraph>
            Dive deep into a world of intriguing quizzes tailored for adults.
            From cinema to logic, challenge your knowledge and discover where
            your expertise lies. Explore a diverse range of topics and test the
            depths of your knowledge.
          </Paragraph>
        )}
        {children && (
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
        {adults && <RandomQuiz adultsQuiz={randomAdultsQuizzes} />}
        {children && <RandomQuiz childrenQuiz={randomChildrenQuizzes} />}
        <RandomBtnWrapper>
          <BtnLoadMore handleLoadMore={loadMore} />
        </RandomBtnWrapper>
      </RandomSectionWrapper>
    </RandomPageWrapper>
  );
};

export default RandomQuizPage;
