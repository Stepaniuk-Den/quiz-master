import { Settings, DropdownButton, DropdownContainer, DropdownItem, DropdownList, LogOut, MessageCircle, HeaderContainer, Logo, NavItem, NavList, Up, Down, UserName, ButtonRegister, ButtonLogin } from "./HeaderStyled";
import React, { useState } from 'react';
import { infoUser } from "../../../homepage/components/UserStats/info/infoUser";
import { Link, useLocation } from "react-router-dom";
import LogoutModal from "../../../homepage/components/ModalLogOut/ModalLogOut";

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
    const location = useLocation();

    const hasToken = true;

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
        setLogoutModalOpen(false);
    };

    const openLogoutModal = () => {
        setLogoutModalOpen(true);
    };

    const navItems = [
        { to: '/home', label: 'Home' },
        { to: '/discover', label: 'Discover' },
        { to: '/favorite', label: 'Favorite quize' },
        { to: '/ownquiz', label: 'My quize' },
    ];

    const generateNavLinks = (hasToken) => {
        return navItems.map((item, index) => (
            <Link key={index} to={item.to}>
                <NavItem className={location.pathname === item.to ? 'active' : ''}>
                    {item.label}
                </NavItem>
            </Link>
        ));
    };

    return (
        <HeaderContainer>
            <Link to='/'><Logo>QuizMaster</Logo></Link>
            <NavList>
                {hasToken ? (
                    <>
                        {generateNavLinks(hasToken)}
                        <NavItem className={location.pathname === '/ownquiz' ? 'active' : ''}>For Adults</NavItem>
                        <NavItem className={location.pathname === '/ownquiz' ? 'active' : ''}>For Children</NavItem>
                    </>
                ) : (
                    <>
                        <NavItem className={location.pathname === '/ownquiz' ? 'active' : ''}>For Adults</NavItem>
                        <NavItem className={location.pathname === '/ownquiz' ? 'active' : ''}>For Children</NavItem>
                    </>
                )}
            </NavList>

            {hasToken ? (
                <DropdownContainer>
                    <DropdownButton onClick={toggleDropdown}>
                        <img src={infoUser.avatar} alt="" width={40} height={40} />
                        <UserName>{infoUser.userName}</UserName>
                        {isDropdownOpen ? <Up /> : <Down />}
                    </DropdownButton>
                    <DropdownList open={isDropdownOpen}>
                        <Link to="/settings"><DropdownItem><Settings />Settings</DropdownItem></Link>
                        <Link to="/feedback"><DropdownItem><MessageCircle />Feedback</DropdownItem></Link>
                        <DropdownItem onClick={openLogoutModal}><LogOut />Log out</DropdownItem>
                    </DropdownList>
                    <LogoutModal isOpen={isLogoutModalOpen} onClose={() => setLogoutModalOpen(false)} />
                </DropdownContainer>
            ) : (
                <div>
                    <ButtonRegister>Register</ButtonRegister>
                    <ButtonLogin>Login</ButtonLogin>
                </div>
            )}
        </HeaderContainer>
    );
};

export default Header;
