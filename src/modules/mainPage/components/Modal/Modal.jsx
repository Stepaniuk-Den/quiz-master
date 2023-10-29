import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { createPortal } from "react-dom";
import { StyledCloseBtn, StyledModal, StyledOverlay } from "./Modal.styled";
import { AiOutlineClose } from "react-icons/ai";
import {
  selectIsShowAuthPage,
  // selectAuthForm,
} from "../../../../redux/Modal/modalSelectors";
import {
  // closeModal,
  toggleShowAuthPage,
} from "../../../../redux/Modal/modalSlice";

// const modalRoot = document.querySelector("#modal");

const Modal = ({ formToDisplay }) => {
  const dispatch = useDispatch();
  const isShowAuthPage = useSelector(selectIsShowAuthPage);
  // const authForm = useSelector(selectAuthForm);

  useEffect(() => {
    if (!isShowAuthPage) return;
    document.body.classList.add("no-scroll");

    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        document.body.classList.remove("no-scroll");
        dispatch(toggleShowAuthPage(""));
        // dispatch(closeModal());
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch, isShowAuthPage]);

  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      document.body.classList.remove("no-scroll");
      dispatch(toggleShowAuthPage(""));
      // dispatch(closeModal());
    }
  };

  const handleClickBtnClose = () => {
    document.body.classList.remove("no-scroll");
    dispatch(toggleShowAuthPage(""));
    // dispatch(closeModal());
  };
  
  
  return (
  // createPortal(
    <StyledOverlay onClick={handleClickOverlay}>
      {isShowAuthPage && (
        <StyledModal>
          {/* {isShowAuthPage && ( */}
          <StyledCloseBtn type="button" onClick={handleClickBtnClose}>
            <AiOutlineClose size={28} fill="#FFFFFF" />
          </StyledCloseBtn>
          {/* )} */}

          {formToDisplay}

          {/* {authForm === "loginForm" && isShowAuthPage && formToDisplay} */}
          {/* {authForm === "loginForm" && isShowAuthPage && <LogInForm />}
        {authForm === "registerForm" && isShowAuthPage && <RegisterForm />} */}
        </StyledModal>
      )}
    </StyledOverlay>
    // modalRoot
  );
};

export default Modal;
