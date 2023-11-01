import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BoxAuth,
  Logo,
  NavItem,
  NavList,
  StyledCloseBtn,
  StyledModal,
  StyledOverlay,
} from "./ModalBurger.styled";
import { AiOutlineClose } from "react-icons/ai";
import {selectIsShowBurgerModal } from "../../../redux/Modal/modalSelectors";
import { toggleShowAuthPage, toggleShowBurgerModal } from "../../../redux/Modal/modalSlice";
import { Link, useLocation } from "react-router-dom";
import BtnRegister from "../components/ButtonRegister/ButtonRegister";
import BtnLogin from "../components/ButtonLogin/ButtonLogin";
import { selectIsAuth } from "../../../redux/user/userSelectors";


const ModalBurger = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const isShowBurgerModal = useSelector(selectIsShowBurgerModal);
  const hasToken = useSelector(selectIsAuth);

  const handleOpenModal = (e) => {
    dispatch(toggleShowAuthPage(e.currentTarget.name));
    dispatch(toggleShowBurgerModal());
  };

  useEffect(() => {
    if (!isShowBurgerModal) return;
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [dispatch, isShowBurgerModal]);

  const handleClickBtnClose = () => {
    document.body.classList.remove("no-scroll");
    dispatch(toggleShowBurgerModal());
  };

  const navItems = [
    { to: "/home" || "/lastPassed", label: "Home" },
    { to: "/discover", label: "Discover" },
    { to: "/favorite", label: "Favorite quize" },
    { to: "/ownquiz", label: "My quize" },
  ];

  const generateNavLinks = (hasToken) => {
    return navItems.map((item, index) => (
      <Link key={index} to={item.to}>
        <NavItem className={location.pathname === item.to ? "active" : ""} onClick={handleClickBtnClose}>
          {item.label}
        </NavItem>
      </Link>
    ));
  };

  return (
    isShowBurgerModal && (
      <StyledOverlay>
        <StyledModal>
        <Link to="/" onClick={handleClickBtnClose}>
        <Logo>QuizMaster</Logo>
      </Link>
          <StyledCloseBtn type="button" onClick={handleClickBtnClose}>
            <AiOutlineClose size={28} fill="#FFFFFF" />
          </StyledCloseBtn>
          <NavList>
        {hasToken ? (
          <>{generateNavLinks(hasToken)}</>
        ) : (
          <>
            <NavItem
              className={location.pathname === "/ownquiz" ? "active" : ""}
              onClick={handleClickBtnClose}
            >
              For Adults
            </NavItem>
            <NavItem
              className={location.pathname === "/ownquiz" ? "active" : ""}
              onClick={handleClickBtnClose}
            >
              For Children
            </NavItem>
          </>
        )}
      </NavList>
          <BoxAuth>
          <Link to="/auth/RegisterForm">
            <BtnRegister handleOpenModal={handleOpenModal}>Register</BtnRegister>
          </Link>
          <Link to="/auth/loginForm">
            <BtnLogin handleOpenModal={handleOpenModal}>Login</BtnLogin>
          </Link>
        </BoxAuth>
        </StyledModal>
      </StyledOverlay>
)
  );
};

export default ModalBurger;
