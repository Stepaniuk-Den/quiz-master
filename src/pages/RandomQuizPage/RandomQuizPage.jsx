import React from "react";
import PageTitle from "../../shared/components/PageTitle/PageTitle";
import {
  RandomPageDesc,
  RandomPageWrapper,
  RandomSectionWrapper,
  RandomTitleWrapper,
} from "./RandomQuizPageStyled";
import { useSelector } from "react-redux";
import { selectFavorite } from "../../redux/selectors";
import QuizesList from "../../shared/components/QuizesList/QuizesList";
import { useParams } from "react-router-dom";
import Paragraph from "../../shared/components/Paragraph/Paragraph";

const RandomQuizPage = () => {
  const { ageType } = useParams();

  const adults = ageType === "Adults";
  const children = ageType === "Children";

  //console.log(ageType);
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
      </RandomSectionWrapper>
    </RandomPageWrapper>
  );
};

export default RandomQuizPage;
