import React from "react";
import { StyledHero } from "./Hero.styled";
import MediumBtn from "../../../../shared/Buttons/MediumBtn/MediumBtn";

function Hero() {
  return (
    <StyledHero>
      <div>
        <p>Hello visitor!</p>
        <p>
          On the site you will find quizzes and quizzes with various types of
          questions: cinema, music, logic and others. Quizzes differ in the
          degreeof difficulty of questions, the number and type of questions.
        </p>
        <MediumBtn text="Choose a test" type="accent" />
        <MediumBtn text="Create a quest" />
      </div>
      <h1>Are you ready to <br/> take the Quiz?</h1>
    </StyledHero>
  );
}

export default Hero;
