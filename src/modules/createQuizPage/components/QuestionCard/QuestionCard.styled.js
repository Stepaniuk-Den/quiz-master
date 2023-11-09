import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { PiPlus } from "react-icons/pi";
import { BtnConfirmAuthS } from "../../../../shared/components/Buttons/BtnConfirmAuth/BtnConfirmAuthS";

export const StyledQuestionWrapper = styled.div`
  display: flex;
  max-width: 335px;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    max-width: 440px;
  }

  @media only screen and (min-width: 1440px) {
    max-width: 744px;
    margin: 0 24px;
  }
`;

export const StyledQuestionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 335px;
  height: 562px;
  margin-top: 20px;
  padding: 40px 20px;
  background-color: var(--white-background);
  border-radius: 20px;

  @media only screen and (min-width: 768px) {
    max-width: 440px;
    padding: 32px 20px;
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: start;
    max-width: 744px;
    height: 521px;
    margin-top: 24px;
    padding: 64px 68px 64px 64px;
  }
`;

export const StyledImageNumberBlock = styled.div`
  display: none;
  @media only screen and (min-width: 1440px) {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;

    & p {
      color: var(--text-color-100);
      font-family: "GilroyBold";
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;

  border-radius: 50%;
  border: 1px solid var(--blue-background);
  background-color: var(--blue-background);

  @media only screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const StyledPlus = styled(PiPlus)`
  width: 41px;
  height: 41px;
`;

export const StyledInputTheme = styled.input`
  display: inline-flex;
  padding: 14px 18px;
  max-width: 335px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 30px;
  border: 1px solid var(--border-color-30);
  background-color: transparent;
  color: var(--text-color-100);

  &::placeholder {
    color: var(--text-color-100);
  }

  @media only screen and (min-width: 768px) {
    max-width: 280px;
  }
`;

export const StyledTimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 32px 0;
  gap: 14px;
  & p {
    color: var(--text-color-60);
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 1440px) {
    justify-content: start;
    margin-top: 0;
  }
`;

export const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const DropdownButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 91px;
  height: 36px;
  padding: 8px 18px;
  column-gap: 8px;
  cursor: pointer;
  background: none;
  border-radius: 30px;
  border: 1px solid var(--border-color-60);

  & p {
    color: var(--text-color-100);
    font-size: 14px;
    font-family: "GilroyBold";
    line-height: 18px; /* 128.571% */
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  z-index: 2;
  left: 0;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  gap: 12px;
  width: 91px;
  padding: 8px 32px 8px 18px;
  border-radius: 20px;
  background: var(--blue-background);
`;

export const DropdownItem = styled.li`
  color: var(--text-color-100);
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Down = styled(FiChevronDown)`
  width: 16px;
  height: 16px;
  stroke: var(--text-color-100);
`;

export const StyledQuestion = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 295px;
  font-size: 14px;
  letter-spacing: -0.14px;

  @media only screen and (min-width: 768px) {
    max-width: 376px;
    font-size: 16px;
    letter-spacing: -0.16px;
  }

  @media only screen and (min-width: 1440px) {
    margin-left: 32px;
    max-width: 460px;
  }
`;

export const StyledInputQuestion = styled.input`
  display: inline-flex;
  padding: 14px 18px;
  /* max-width: 280px; */
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 30px;
  border: 1px solid var(--border-color-60);
  background-color: transparent;
  color: var(--text-color-100);
  &::placeholder {
    color: var(--text-color-100);
  }
`;

export const AnswerCardContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin: 16px 0;

  @media only screen and (min-width: 768px) {

  }

  @media only screen and (min-width: 1440px) {
    display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  margin: 16px 0;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: auto;
  gap: 14px;
`;

export const StyledBtnSave = styled(BtnConfirmAuthS)`
  margin: 0;
  width: min-content;
  padding: 16px 32px;
`;
export const StyledBtnCancel = styled(StyledBtnSave)`
  background-color: transparent;
  border: 1px solid var(--border-color-60);
`;
