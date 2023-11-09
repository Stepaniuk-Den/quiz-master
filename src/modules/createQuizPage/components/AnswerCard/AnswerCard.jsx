import React, { useState } from "react";
import {
  StyledAnswerBoolean,
  StyledAnswerWrapper,
  StyledInputAnswer,
  StyledInputRadio,
  StyledLabelAnswer,
} from "./AnswerCard.styled";

const AnswerCard = ({
  letter,
  changeAttribute,
  checked,
  quizType,
  changeAnswer,
  currentValue,
}) => {
  return (
    <StyledAnswerWrapper quiz={quizType === "quiz" ? "quiz" : null}>
      <StyledLabelAnswer htmlFor={letter}>
        <p>{letter}:</p>
        {quizType === "quiz" ? (
          <StyledInputAnswer
            type="text"
            id={letter}
            placeholder="Enter answer"
            value={currentValue}
            onChange={changeAnswer}
          />
        ) : (
          <StyledAnswerBoolean>
            {letter === "A" ? "True" : "False"}
          </StyledAnswerBoolean>
        )}
        <StyledInputRadio
          type="radio"
          name="answer"
          id={letter}
          checked={checked === letter}
          onChange={changeAttribute}
        />
        <span></span>
      </StyledLabelAnswer>
    </StyledAnswerWrapper>
  );
};

export default AnswerCard;
