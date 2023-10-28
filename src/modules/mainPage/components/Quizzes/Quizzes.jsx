import React from "react";
import CardsAll from "../../../../shared/CardsAll";
import BtnLoadMore from "../../../../shared/Buttons/BtnLoadMore/BtnLoadMore";
import { StyledQuizzes } from "./Quizzes.styled";

function Quizzes({ adults, children }) {
  return (
    <StyledQuizzes>
      <div>
        <h2>For Adults</h2>
        <p>
          Dive deep into a world of intriguing quizzes tailored for adults. From
          cinema to logic, challenge your knowledge and discover where your
          expertise lies. Explore a diverse range of topics and test the depths
          of your knowledge.
        </p>
        <BtnLoadMore text="See all" />
        <CardsAll array={adults}/>
      </div>
      <div>
        <h2>For Children</h2>
        <p>
          Engaging and fun quizzes designed specifically for kids. Dive into a
          world of colorful questions on movies, music, and much more. Perfect
          for young curious minds! A safe space for children to learn, play, and
          grow their knowledge.
        </p>
        <BtnLoadMore text="See all" />
        <CardsAll array={children}/>
      </div>
    </StyledQuizzes>
  );
}

export default Quizzes;
