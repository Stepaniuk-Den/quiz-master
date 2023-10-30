import { Settings, DropdownButton, DropdownContainer, DropdownItem, DropdownList, LogOut, MessageCircle, HeaderContainer, Logo, NavItem, NavList, Up, Down, UserName } from "./HeaderHomeStyled";
import React, { useState } from 'react';
// import { infoUser } from "../../components/UserStats/info/infoUser";
import { infoUser } from "../../../components/UserStats/info/infoUser";
import { Link, useLocation} from "react-router-dom";
import LogoutModal from "../../../components/ModalLogOut/ModalLogOut";


const HeaderHome = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
    
  const location = useLocation();
  
  // Визначення активної сторінки на основі URL
  const isActiveHome = location.pathname === '/home';
    const isActiveDiscover = location.pathname === '/discover';
    const isActiveFavorite = location.pathname === '/favorite';
    const isActiveOwnQuiz = location.pathname === '/ownquiz';
const toggleDropdown = () => {
  setDropdownOpen(!isDropdownOpen);
  setLogoutModalOpen(false);
    };

    const openLogoutModal = () => {
  setLogoutModalOpen(true);
};


    return (
        <HeaderContainer>
            <Logo>QuizMaster</Logo>
            <NavList>
                <Link to="/home"><NavItem className={isActiveHome ? 'active' : ''}>Home</NavItem></Link>
                <Link to="/discover"><NavItem className={isActiveDiscover ? 'active' : ''}>Discover</NavItem></Link>
                <Link to="/favorite"><NavItem className={isActiveFavorite ? 'active' : ''}>Favorite quize</NavItem></Link>
                 <Link to="/ownquiz"><NavItem className={isActiveOwnQuiz ? 'active' : ''}>My quize</NavItem></Link>
            </NavList>
            <DropdownContainer>
                <DropdownButton onClick={toggleDropdown}>
                    <img src={infoUser.avatar} alt="" width={40} height={40}/>
                    <UserName>{infoUser.userName }</UserName>
                    {isDropdownOpen ? <Up /> : <Down />}
                </DropdownButton>
                <DropdownList open={isDropdownOpen}>
                   <Link to="/settings"> <DropdownItem>  <Settings />Settings</DropdownItem></Link>
                   <Link to="/feedback"> <DropdownItem> <MessageCircle />Feedback</DropdownItem></Link>
                    <DropdownItem onClick={openLogoutModal}><LogOut />Log out</DropdownItem>
                </DropdownList>
                <LogoutModal isOpen={isLogoutModalOpen} onClose={() => setLogoutModalOpen(false)} />
            </DropdownContainer>
        </HeaderContainer>
    );
};

export default HeaderHome;