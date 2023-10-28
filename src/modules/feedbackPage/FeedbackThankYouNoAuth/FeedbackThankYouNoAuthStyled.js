import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const FormContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-bottom: 155px;
  padding: 130px 20px;
  width: 335px;
  height: 404px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px var(--border-color-30) solid;
  background-color: var(--white-background);

  @media (min-width: 768px) {
    width: 452px;
    height: 408px;
    margin-bottom: 170px;
    padding: 120px 100px;
  }
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 32px;
`;
export const TitleThanks = styled.h2`
  font-size: 20px;
  font-family: "GilroyBold";
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 16px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
export const TextThanks = styled.p`
  color: var(--text-color-60);
  font-size: 15px;
  font-family: "GilroyRegular";
  font-weight: 400;
  line-height: 16px;
`;
export const ToMainPageBtn = styled.button`
  color: var(--text-color-100);
  font-size: 14px;
  font-family: "GilroyBold";
  font-weight: 700;
  line-height: 16px;
  width: 100%;
  height: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  background: var(--accent-color);
  border-radius: 30px;
  border: none;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
export const CloseBtnContainer = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  background-color: transparent;
  @media (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`;
export const CloseBtn = styled(AiOutlineClose)`
  width: 20px;
  height: 20px;
  color: var(--text-color-100);
`;
