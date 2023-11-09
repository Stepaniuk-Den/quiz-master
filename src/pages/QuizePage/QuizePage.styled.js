import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
      max-width: 1240px;
  margin-left:auto;
  margin-right: auto;
`

export const BackBox = styled.div`
  margin: 48px 0 30px;
  @media (min-width: 768px) {
    margin: 52px 0 144px;
  }
  @media (min-width: 1440px) {
    margin: 68px 0 28px;
  }
`;
