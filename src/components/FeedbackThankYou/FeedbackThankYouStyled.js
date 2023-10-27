import styled from "styled-components";

export const FormContainer = styled.div`
  box-sizing: border-box;
  margin-bottom: 219px;
  padding: 40px 20px;
  width: 335px;
  height: 383px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px rgba(244.37, 244.37, 244.37, 0.3) solid;
  background-color: rgba(255, 255, 255, 0.02);
  background-color: var(--white-background);

  @media (min-width: 768px) {
    width: 580px;
    height: 440px;
    margin-bottom: 104px;
    padding: 64px 140px;
  }
`;

export const ThankYouWrapper = styled.div`
margin-top: 17px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ThankYouText = styled.h2`
  text-align: center;
  color: #f4f4f4;
  font-size: 14px;
  font-family: "GilroyRegular";
  font-weight: 400;
  line-height: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ToMainPageBtn = styled.button`
  color: #f4f4f4;
  font-size: 14px;
  font-family: "GilroyBold";
  font-weight: 700;
  line-height: 16px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #205bf1;
  border-radius: 30px;
  border: none;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
