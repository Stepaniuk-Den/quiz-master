import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledOverlay } from "./Modal.styled";
import { selectIsShowAuthPage } from "../../../redux/Modal/modalSelectors";
import { toggleShowAuthPage } from "../../../redux/Modal/modalSlice";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const isShowAuthPage = useSelector(selectIsShowAuthPage);

  useEffect(() => {
    if (!isShowAuthPage) return;
    document.body.classList.add("no-scroll");

    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        document.body.classList.remove("no-scroll");
        dispatch(toggleShowAuthPage(""));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("no-scroll");
    };
  }, [dispatch, isShowAuthPage]);

  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      document.body.classList.remove("no-scroll");
      dispatch(toggleShowAuthPage(""));
    }
  };


  return createPortal (
    isShowAuthPage && (
      <StyledOverlay onClick={handleClickOverlay}>
        {children}
      </StyledOverlay>
    ),
    modalRoot
  );
};

export default Modal;
