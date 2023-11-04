import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    toast.info("This function is available only for authorized users :)", {
      autoClose: 3000,
      theme: "dark",
      position: toast.POSITION.TOP_CENTER,
    });
    //console.log("This function is available only for authorized users :)");
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
      <ToastContainer />
    </CardRedirecionWrapper>
  );
};

export default CreateQuizCard;
