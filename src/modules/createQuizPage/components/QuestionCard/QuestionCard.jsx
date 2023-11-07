import React from "react";
import { ImageWrapper, StyledPlus } from "./QuestionCard.styled";

const QuestionCard = () => {
  return (
    <div>
      <input type="text" placeholder="Quiz theme" />
      <div>
        <ImageWrapper>
          <StyledPlus />
        </ImageWrapper>
      </div>
      
    </div>
  );
};

export default QuestionCard;
