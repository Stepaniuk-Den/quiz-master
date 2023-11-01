import styled from "styled-components";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--blue-background);
  backdrop-filter: blur(1.5px);
  overscroll-behavior: contain;
  z-index: 1;
`;

export const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 40px 20px 28px;
  justify-content: start;
  align-items: center;
  flex-direction: column;

`;

export const Logo = styled.div`
 position: absolute;
 top: 20px;
  left: 20px;
  color: var(--text-color-100);
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.24px;
`;

export const StyledCloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 24px;
    height: 24px;
    top: 16px;
    right: 16px;
  }
`;

export const BoxAuth = styled.div`
display: flex;
align-items: center;
margin-top: auto;
`;

export const NavList = styled.ul`
  display: none;
      @media (max-width: 767px) {
    display: flex;
    row-gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 251px;
  }
`;

export const NavItem = styled.li`
  color: var(--text-color-100);
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.14px;
  cursor: pointer;

    /* &.active {
    scale: 1.1;
  } */
`;