import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { PiPlus } from "react-icons/pi";

export const StyledQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;
export const StyledImageNumberBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & p {
    color: var(--text-color-100);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 100% */
    letter-spacing: -0.16px;
  }
`;

export const StyledQuestionCard = styled.div`
  display: flex;
  width: 744px;
  height: 521px;
  margin-top: 24px;
  padding: 64px 68px 64px 64px;
  background-color: var(--white-background);
  border-radius: 20px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;

  border-radius: 50%;
  border: 1px solid var(--blue-background);
  background-color: var(--blue-background);
`;

export const StyledPlus = styled(PiPlus)`
  width: 41px;
  height: 41px;
`;

export const StyledInputTheme = styled.input`
  display: inline-flex;
  padding: 14px 18px;
  max-width: 280px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 30px;
  border: 1px solid var(--border-color-30);
  background-color: transparent;
  color: var(--text-color-100);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
  letter-spacing: -0.16px;
  &::placeholder {
    color: var(--text-color-100);
  }
`;

export const StyledTimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 32px;
  gap: 14px;
  & p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 100% */
    letter-spacing: -0.16px;
    color: var(--text-color-60);
  }
`;

export const StyledQuestion = styled.div`
  margin-left: 32px;
  width: 460px;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
  letter-spacing: -0.16px;
  &::placeholder {
    color: var(--text-color-100);
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
  min-width: 90px;
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
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 128.571% */
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  left: 0;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  gap: 12px;
  width: 83px;
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

export const AnswerCardContainer = styled.ul`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 16px;
margin: 16px 0;
`;

// export const Up = styled(FiChevronUp)`
//   width: 16px;
//   height: 16px;
//   stroke: var(--text-color-100);
// `;

// .custom-select {
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   appearance: none;
//   padding-right: 20px; /* Добавляем отступ для новой стрелки /
//   background-image: url('путькизображению_стрелки.png'); / Добавляем свое изображение в качестве стрелки */
//   background-repeat: no-repeat;
//   background-position: center right;
// }
