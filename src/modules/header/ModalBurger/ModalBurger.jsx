import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  StyledCloseBtn,
  StyledModal,
  StyledOverlay,
} from "./ModalBurger.styled";
import { AiOutlineClose } from "react-icons/ai";


const ModalBurger = ({ children }) => {
  const dispatch = useDispatch();

  document.body.classList.add("no-scroll");

  const handleClickBtnClose = () => {
    document.body.classList.remove("no-scroll");

  };
  return (
    <>
      <StyledOverlay>
        <StyledModal>
          <StyledCloseBtn type="button" onClick={handleClickBtnClose}>
            <AiOutlineClose size={28} fill="#FFFFFF" />
          </StyledCloseBtn>
          {/* {children} */}
          <h3>Burger</h3>
        </StyledModal>
      </StyledOverlay>
    </>
  );
};

export default ModalBurger;
