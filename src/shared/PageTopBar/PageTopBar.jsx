import React from "react";
import { PageTopBarBox, TitleS } from "./PageTopBarStyled";
import BtnCreateQuiz from "../Buttons/BtnCreateQuiz/BtnCreateQuiz";

const PageTopBar = ({titlePage}) => {
  return (
    <>
      <PageTopBarBox>
        <TitleS>{titlePage}</TitleS>
        <BtnCreateQuiz />
      </PageTopBarBox>
    </>
  );
};

export default PageTopBar;
