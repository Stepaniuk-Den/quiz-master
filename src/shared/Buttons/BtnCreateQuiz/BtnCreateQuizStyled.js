import styled from "styled-components";
import { BiPlus } from "react-icons/bi";

export const ButtonS = styled.button`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 194px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border: transparent;
`;
export const IconWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid #205bf1;
`;

export const BiPlusS = styled(BiPlus)`
  width: 24px;
  height: 24px;
  fill: #205bf1;
`;

export const BtnTitle = styled.h3`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 130px;
  /* height: 32px;
text-align: center; */
  /* color: #F4F4F4; */
  /* font-family: Gilroy; */
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`;
