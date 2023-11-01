import styled from "styled-components";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backdrop);
  backdrop-filter: blur(1.5px);
  overscroll-behavior: contain;
`;

export const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 474px;
  width: 100%;
  padding: 60px 80px;
  border: 1px solid var(--text-color-30);
  border-radius: 20px;
  background-color: var(--second-background);

  @media screen and (max-width: 768px) {
    max-width: 335px;
    padding: 40px 20px;
  }
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
