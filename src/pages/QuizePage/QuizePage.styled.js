import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuizeBox = styled.div`
  width: 335px;
  background-color: var(--second-background);
  padding: 40px 20px;
  border-radius: 20px;
  @media (min-width: 768px) {
    width: 580px;
    background-color: var(--second-background);
    padding: 60px;
    border-radius: 20px;
  }
`;

export const BackBox = styled.div`
  margin: 48px 0 30px;
  @media (min-width: 768px) {
    margin: 52px 0 144px;
  }
  @media (min-width: 1440px) {
    margin: 68px 0 28px;
  }
`;
