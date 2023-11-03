import React from "react";
//import { toast } from "react-toastify";
import {
  BiPlusRed,
  ButtonRedStyled,
  CardRedirecionWrapper,
  RandomPageCardTitle,
  RedIconWrapper,
  RedirectionButtonWrap,
} from "./CreateQuizCardStyled";

const CreateQuizCard = () => {
  const handlePushMessage = () => {
    console.log("This function is available only for authorized users :)");
  };
  return (
    <CardRedirecionWrapper>
      <RedirectionButtonWrap>
        <ButtonRedStyled type="button" onClick={handlePushMessage}>
          <RedIconWrapper>
            <BiPlusRed />
          </RedIconWrapper>
        </ButtonRedStyled>
        <RandomPageCardTitle>Create quiz</RandomPageCardTitle>
      </RedirectionButtonWrap>
    </CardRedirecionWrapper>
  );
};

export default CreateQuizCard;
