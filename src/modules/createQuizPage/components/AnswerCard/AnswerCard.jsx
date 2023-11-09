import React from "react";
import {
  StyledAnswerBoolean,
  StyledAnswerWrapper,
  StyledInputAnswer,
  StyledInputRadio,
  StyledLabelAnswer,
} from "./AnswerCard.styled";

const AnswerCard = ({ letter, changeAttribute, checked, quizType }) => {
  return (
    <StyledAnswerWrapper quizType === "quiz" ? >
      <StyledLabelAnswer htmlFor={letter}>
        <p>{letter}:</p>
        {quizType === "quiz" ? (
          <StyledInputAnswer
            type="text"
            id={letter}
            placeholder="Enter answer"
        
          />
        ) : (
          <StyledAnswerBoolean>{letter === "A" ? "True" : "False"}</StyledAnswerBoolean>
        )}
        <StyledInputRadio
          type="radio"
          name={letter}
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
