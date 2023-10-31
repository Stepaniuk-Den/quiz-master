import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { StyledCloseBtn, StyledModal, StyledOverlay } from "./Modal.styled";
import { selectIsShowAuthPage } from "../../../redux/Modal/modalSelectors";
import { toggleShowAuthPage } from "../../../redux/Modal/modalSlice";

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const isShowAuthPage = useSelector(selectIsShowAuthPage);

  useEffect(() => {
    if (!isShowAuthPage) return;
    // document.body.classList.add("no-scroll");

    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        document.body.classList.remove("no-scroll");
        dispatch(toggleShowAuthPage(""));
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
    }
  };

  const handleClickBtnClose = () => {
    document.body.classList.remove("no-scroll");
    dispatch(toggleShowAuthPage(""));
  };

  return (
    isShowAuthPage && (
      <StyledOverlay onClick={handleClickOverlay}>
        <StyledModal>
          <StyledCloseBtn type="button" onClick={handleClickBtnClose}>
            <AiOutlineClose size={28} fill="#FFFFFF" />
          </StyledCloseBtn>
          {children}
        </StyledModal>
      </StyledOverlay>
    )
  );
};

export default Modal;
