import React from "react";
import PageTitle from "../../../../shared/PageTitle/PageTitle";
import Paragraph from "../../../../shared/Paragraph/Paragraph";
import MediumBtn from "../../../../shared/Buttons/MediumBtn/MediumBtn";
import { StyledNavBlock } from "./NavBlock.styled";

function NavBlock() {
  return (
    <StyledNavBlock>
      <div>
        <PageTitle>Joins, pass quizzes or create them</PageTitle>
        <Paragraph>Be a part of our quiz community! Take on challenges, showcase your knowledge, or craft your very own quiz to share with the world. Whether you're a quiz enthusiast or a curious learner, there's something here for everyone.</Paragraph>
        <MediumBtn type="nav-accent">Choose a test</MediumBtn>
        <MediumBtn>Create a quest</MediumBtn>
      </div>
    </StyledNavBlock>
  );
}

export default NavBlock;