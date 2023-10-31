import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledCloseBtn,
  StyledModal,
  StyledOverlay,
} from "./ModalBurger.styled";
import { AiOutlineClose } from "react-icons/ai";
import { toggleShowAuthPage } from "../../../redux/Modal/modalSlice";

const ModalBurger = ({ children }) => {
  const dispatch = useDispatch();

  document.body.classList.add("no-scroll");

  const handleClickBtnClose = () => {
    document.body.classList.remove("no-scroll");
    dispatch(toggleShowAuthPage(""));
  };
  return (
    <>
      <StyledOverlay>
        <StyledModal>
          <StyledCloseBtn type="button" onClick={handleClickBtnClose}>
            <AiOutlineClose size={28} fill="#FFFFFF" />
          </StyledCloseBtn>
          {children}
        </StyledModal>
      </StyledOverlay>
    </>
  );
};

export default ModalBurger;
