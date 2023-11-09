import React from "react";
import {
  StyledAnswerWrapper,
  StyledInputAnswer,
  StyledInputRadio,
  StyledLabelAnswer,
} from "./AnswerCard.styled";

const AnswerCard = ({ letter, changeAttribute, checked }) => {

  return (
    <StyledAnswerWrapper>
      <StyledLabelAnswer htmlFor={letter}>
        <p>{letter}:</p>
        <StyledInputAnswer type="text" id={letter} placeholder="Enter answer" />
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
