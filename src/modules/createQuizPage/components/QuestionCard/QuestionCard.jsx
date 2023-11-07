import React from "react";
import {
  ImageWrapper,
  StyledInputQuestion,
  StyledInputTheme,
  StyledPlus,
  StyledQuestion,
  StyledQuestionCard,
  StyledQuestionWrapper,
  StyledSelectTime,
  StyledTimeWrapper,
} from "./QuestionCard.styled";

const QuestionCard = () => {
  return (
    <StyledQuestionWrapper>
      <StyledInputTheme type="text" placeholder="Quiz theme" />
      <StyledQuestionCard>
        <ImageWrapper>
          <StyledPlus />
        </ImageWrapper>
        <StyledQuestion>
          <StyledTimeWrapper>
            <label htmlFor="time">Time:</label>
            {/* <input type="text" name="time" id="time" /> */}
            <StyledSelectTime name="time" id="time"></StyledSelectTime>
          </StyledTimeWrapper>
          <StyledInputQuestion type="text" name="question" placeholder="Enter a question"/>
          
        </StyledQuestion>
      </StyledQuestionCard>
    </StyledQuestionWrapper>
  );
};

export default QuestionCard;
