import {
  Settings,
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownList,
  LogOut,
  MessageCircle,
  HeaderContainer,
  Logo,
  NavItem,
  NavList,
  Up,
  Down,
  UserName,
  BoxAuth,
} from "./HeaderStyled";
import React, { useEffect, useRef, useState } from "react";
import { infoUser } from "../../homepage/components/UserStats/info/infoUser";
import { Link, useLocation } from "react-router-dom";
import LogoutModal from "../../homepage/components/ModalLogOut/ModalLogOut";
import { useDispatch, useSelector } from "react-redux";
import {
  // toggleShowAuthPage,
  toggleShowBurgerModal,
} from "../../../redux/Modal/modalSlice";
import { selectIsAuth } from "../../../redux/user/userSelectors";

import { useMediaQuery } from "react-responsive";
import BtnBurger from "../BtnBurger/BtnBurger";
import ModalBurger from "../ModalBurger/ModalBurger";
import BtnRegister from "../components/ButtonRegister/ButtonRegister";
import BtnLogin from "../components/ButtonLogin/ButtonLogin";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const location = useLocation();

  const dropdownRef = useRef(null);

  const hasToken = useSelector(selectIsAuth);

  const dispatch = useDispatch();
  // const handleOpenModal = (e) => {
  //   dispatch(toggleShowAuthPage(e.currentTarget.name));
  // };

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setLogoutModalOpen(false);
  };

  const openLogoutModal = () => {
    setLogoutModalOpen(true);
  };

  const openBurgerMenu = () => {
    dispatch(toggleShowBurgerModal());
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        isDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isDropdownOpen]);

  const navItems = [
    { to: "/home" || "/lastPassed", label: "Home" },
    { to: "/discover", label: "Discover" },
    { to: "/favorite", label: "Favorite quize" },
    { to: "/ownquiz", label: "My quize" },
  ];

  const generateNavLinks = (hasToken) => {
    return navItems.map((item, index) => (
      <Link key={index} to={item.to}>
        <NavItem className={location.pathname === item.to ? "active" : ""}>
          {item.label}
        </NavItem>
      </Link>
    ));
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>QuizMaster</Logo>
      </Link>
      <NavList>
        {hasToken ? (
          <>{generateNavLinks(hasToken)}</>
        ) : (
          <>
            <Link to="/randomquiz/Adults">
              <NavItem
                className={
                  location.pathname === "/randomquiz/Adults" ? "active" : ""
                }
              >
                For Adults
              </NavItem>
            </Link>
            <Link to="/randomquiz/Children">
              <NavItem
                className={
                  location.pathname === "/randomquiz/Children" ? "active" : ""
                }
              >
                For Children
              </NavItem>
            </Link>
          </>
        )}
      </NavList>

      {hasToken && !isMobile ? (
        <DropdownContainer ref={dropdownRef}>
          <DropdownButton onClick={toggleDropdown}>
            <img src={infoUser.avatar} alt="" width={40} height={40} />
            <UserName>{infoUser.userName}</UserName>
            {isDropdownOpen ? <Up /> : <Down />}
          </DropdownButton>
          <DropdownList open={isDropdownOpen}>
            <Link to="/settings">
              <DropdownItem>
                <Settings />
                Settings
              </DropdownItem>
            </Link>
            <Link to="/feedback">
              <DropdownItem>
                <MessageCircle />
                Feedback
              </DropdownItem>
            </Link>
            <DropdownItem onClick={openLogoutModal}>
              <LogOut />
              Log out
            </DropdownItem>
          </DropdownList>
          <LogoutModal
            isOpen={isLogoutModalOpen}
            onClose={() => setLogoutModalOpen(false)}
          />
        </DropdownContainer>
      ) : isMobile ? (
        <>
          <BtnBurger openBurgerMenu={openBurgerMenu} />
          <ModalBurger />
        </>
      ) : (
        <BoxAuth>
          {/* <Link to="/auth/registerForm">
            <BtnRegister handleOpenModal={handleOpenModal}>
              Register
            </BtnRegister>
          </Link>
          <Link to="/auth/loginForm">
            <BtnLogin handleOpenModal={handleOpenModal}>Login</BtnLogin>
          </Link> */}

          {/* <NavLink to="/auth/registerForm">Register</NavLink>
          <NavLink to="/auth/loginForm">Login</NavLink> */}

          <Link to="/auth/registerForm">
            <BtnRegister>Register</BtnRegister>
          </Link>
          <Link to="/auth/loginForm">
            <BtnLogin>Login</BtnLogin>
          </Link>
        </BoxAuth>
      )}
    </HeaderContainer>
  );
};

export default Header;
