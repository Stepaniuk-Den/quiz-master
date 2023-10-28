import styled from "styled-components";
import { LuEye, LuEyeOff } from "react-icons/lu";
// import { TextField } from '@mui/material';

// export const FormWrapper = styled.div`
//  width: 400px;
// `;

export const AuthTitle = styled.h2`
  align-self: flex-start;
  font-size: 24px;
  font-family: "GilroyBold";
  line-height: 1.3;
  color: var(--text-color-100);
`;

// export const FormStyled = styled.form`
//  width: 400px;
// `;

export const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 14px;
  margin-top: 32px;
  margin-bottom: 32px;
  /* width: 100%; */
  width: 314px;
`;

export const InputStyled = styled.input`
  box-sizing: border-box;
  /* &:not(:last-child) {
 margin-bottom: 14px}; */
  border-radius: 30px;
  border: 1px solid var(--text-color-60);
  font-family: "GilroyRegular";
  font-size: 16px;
  outline: 1px solid transparent;
  padding: 14px 18px;
  background: transparent;
  color: var(--text-color-40);
  /* width: 314px; */
  width: 100%;

  &::placeholder {
    font-family: "GilroyRegular";
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: var(--text-color-40);
  }
`;

export const InputPasswWrapStyled = styled.div`
  width: 100%;
  position: relative;
`;

export const LuEyeStyled = styled(LuEye)`
  color: var(--text-color-100);
`;

export const LuEyeOffStyled = styled(LuEyeOff)`
  color: var(--text-color-100);
`;

export const BtnEyeStyled = styled.button`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: var(--text-color-100);
  border: none;
  cursor: pointer;
`;

export const ButtonEnterStyled = styled.button`
  /* padding: 16px 138px; */
  width: 100%;
  max-width: 314px;
  height: 48px;
  border-radius: 30px;
  font-family: "GilroyBold";
  font-size: 16px;
  line-height: 1;
  color: var(--text-color-100);
  background-color: var(--blue-background);
  margin: 0 auto;
  border: transparent;
  transform: scale(1);
  transition: transform 250ms linear;
  &:hover,
  &:focus {
    transform: scale(0.98);
  }

  @media (max-width: 780px) {
    button {
      max-width: 295px;
    }
  }
`;

export const RestoreStyled = styled.button`
  /* align-self: center; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  background-color: transparent;
  color: var(--text-color-50);
  border: none;
  cursor: pointer;
  transition: color 250ms linear;
  &:hover,
  &:focus {
    color: var(--text-color-30);
  }
`;

export const BtnRegisterStyled = styled.button`
  margin-top: 16px;
  font-family: "GilroyBold";
  font-size: 16px;
  line-height: 1;
  background-color: transparent;
  color: var(--text-color-100);
  /* text-decoration: underline; */
  border: none;
  border-bottom: 1px solid var(--text-color-100);
  cursor: pointer;
  transition: border-bottom 250ms linear;

  &:hover,
  &:focus {
    border-bottom: 1px solid var(--text-color-30);
  }
`;

export const ErrorsStyled = styled.div`
margin: 0 0;
  font-size: 10px;
  line-height: 1;
  color: var(--pink-color);
`;
