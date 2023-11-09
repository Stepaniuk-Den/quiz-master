import React from "react";
import {
  StyledAnswerBoolean,
  StyledAnswerWrapper,
  StyledInputRadio,
  StyledLabelAnswer,
  StyledTextareaAnswer,
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
        <p className="letter">{letter}:</p>
        {quizType === "quiz" ? (
          <StyledTextareaAnswer
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
