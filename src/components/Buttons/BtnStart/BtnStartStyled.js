import styled from "styled-components";

export const BtnStartS = styled.button`
  margin: 0;
  padding: 0;
  /* padding: 12px 24px; */
  cursor: pointer;
  width: 80px;
  height: 40px;
  border-radius: 30px;
  border: 1px solid rgba(244, 244, 244, 0.6);
  background-color: rgba(0, 0, 0, 0.8);
  color: #f4f4f4;
  /* font-family: Gilroy; */
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.14;
  letter-spacing: -0.14px;

  @media (min-width: 768px) {
    width: 85px;
    font-size: 16px;
    line-height: 1;
    letter-spacing: -0.16px;
  }
`;
