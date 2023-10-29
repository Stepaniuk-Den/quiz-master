import React from "react";
import CardsAll from "../../../../shared/CardsAll";
import BtnLoadMore from "../../../../shared/Buttons/BtnLoadMore/BtnLoadMore";
import PageTitle from "../../../../shared/PageTitle/PageTitle";
import Paragraph from "../../../../shared/Paragraph/Paragraph";
import { StyledQuizzes } from "./Quizzes.styled";

function Quizzes({ adults, children }) {
  return (
    <StyledQuizzes>
      <div>
        <PageTitle>For Adults</PageTitle>
        <div>
        <Paragraph>
          Dive deep into a world of intriguing quizzes tailored for adults. From
          cinema to logic, challenge your knowledge and discover where your
          expertise lies. Explore a diverse range of topics and test the depths
          of your knowledge.
        </Paragraph>
        <BtnLoadMore>See all</BtnLoadMore>
        </div>
        <CardsAll array={adults}/>
      </div>
      <div>
        <PageTitle>For Children</PageTitle>
        <div>
        <Paragraph>
          Engaging and fun quizzes designed specifically for kids. Dive into a
          world of colorful questions on movies, music, and much more. Perfect
          for young curious minds! A safe space for children to learn, play, and
          grow their knowledge.
        </Paragraph>
        <BtnLoadMore>See all</BtnLoadMore>
        </div>
        <CardsAll array={children}/>
      </div>
    </StyledQuizzes>
  );
}

export default Quizzes;
