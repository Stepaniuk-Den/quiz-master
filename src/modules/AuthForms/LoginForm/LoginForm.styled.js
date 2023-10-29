import styled from "styled-components";
import { LuEye, LuEyeOff } from "react-icons/lu";

export const AuthTitle = styled.h2`
  align-self: flex-start;
  font-size: 24px;
  font-family: "GilroyBold";
  line-height: 1.3;
  color: var(--text-color-100);

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 1.4;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 14px;
  margin-top: 32px;
  margin-bottom: 32px;
  width: 314px;
  /* width: 100%; */

  @media screen and (max-width: 768px) {
    max-width: 295px;
  }
`;

export const InputStyled = styled.input`
  box-sizing: border-box;
  padding: 14px 18px;
  width: 100%;
  height: 44px;
  border-radius: 30px;
  border: 1px solid var(--text-color-60);
  font-family: "GilroyRegular";
  font-size: 16px;
  outline: 1px solid transparent;
  background: transparent;
  color: var(--star-color-100);

  &::placeholder {
    font-family: "GilroyRegular";
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: var(--text-color-40);
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 1;
    &::placeholder {
      font-size: 14px;
      line-height: 1.1;
    }
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

export const RestoreStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  font-size: 16px;
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

export const ErrorsStyled = styled.div`
  margin: 0 0;
  font-size: 12px;
  line-height: 1.1;
  color: var(--pink-color);
`;
