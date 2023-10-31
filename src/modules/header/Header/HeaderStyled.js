import styled from 'styled-components';
import { FiMessageCircle, FiLogOut, FiSettings, FiChevronDown, FiChevronUp } from "react-icons/fi"


export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
    @media (min-width: 768px) {
     padding-top: 32px;
  }

  @media (min-width: 1440px) {
  padding-top: 20px;
  }
`;

export const Logo = styled.div`
  color: var(--text-color-100);
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.24px;
`;

export const NavList = styled.ul`
  display: none;
      @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavItem = styled.li`
  margin-right: 20px;
  color: rgba(244, 244, 244, 0.60);
  line-height: 20px;
  cursor: pointer;

    &.active {
    color: var(--text-color-100);
  }
`;

export const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const ButtonRegister = styled.button`
padding: 16px 32px;
background: transparent;
border-radius: 30px;
border: 1px solid rgba(244, 244, 244, 0.60);

color: var(--text-color-100);
font-size: 16px;
font-weight: 700;
line-height: 16px;
`;

export const ButtonLogin = styled.button`
color: var(--text-color-100);
font-size: 16px;
font-weight: 700;
line-height: 16px; /* 100% */
text-decoration-line: underline;
background: transparent;
margin-left: 16px;
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
`;

export const UserName = styled.p`
color: var(--text-color-100);
font-size: 16px;
font-weight: 700;
line-height: 20px;
margin-left: 8px;
margin-right: 16px;
`

export const DropdownList = styled.ul`
  position: absolute;
  left: 0;
  display: ${({ open }) => (open ? 'block' : 'none')};
  padding: 24px;
  border-radius: 20px;
  background: var(--blue-background);
`;

export const DropdownItem = styled.li`
  margin-bottom: 14px;
  color: var(--text-color-100);
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    `

export const Settings = styled(FiSettings)`
  width: 16px;
  height: 16px;
  stroke: var(--text-color-100);
`;

export const MessageCircle = styled(FiMessageCircle)`
  width: 16px;
  height: 16px;
  stroke: var(--text-color-100);
`;

export const LogOut = styled(FiLogOut)`
  width: 16px;
  height: 16px;
  stroke: var(--text-color-100);
`;

export const Down = styled(FiChevronDown)`
  width: 28px;
  height: 28px;
  stroke: var(--text-color-100);
`;

export const Up = styled(FiChevronUp)`
  width: 28px;
  height: 28px;
  stroke: var(--text-color-100);
`;

export const BoxAuth = styled.div`
display: flex;
align-items: center;
`