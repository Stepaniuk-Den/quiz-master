import styled from "styled-components";

export const PageTopBarBox = styled.div`
  /* outline: 1px solid yellow; */
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-between; */
  margin-bottom: 40px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 48px;
  }
`;
export const TitleS = styled.h2`
  margin: 0 0 20px;
  padding: 0;
  /* color: #F4F4F4; */
  color: var(--text-color-100);
  font-family: GilroyBold;
  font-size: 32px;
  /* font-style: normal; */
  /* font-weight: 700; */
  line-height: 1.19;
  letter-spacing: -0.32px;

  @media (min-width: 768px) {
    margin: 0;
    font-size: 44px;
    line-height: 1.09;
    letter-spacing: -0.44px;
  }
`;
