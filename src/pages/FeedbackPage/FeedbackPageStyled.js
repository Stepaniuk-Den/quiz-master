import styled from "styled-components";

export const PageWrapper = styled.div`
  outline: 1px solid green;
  padding: 64px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionWrapper = styled.section`
  /* outline: 1px solid red; */
  width: 100%;
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const TitleS = styled.h2`
  padding: 0;
  color: #f4f4f4;
  font-family: "GilroyBold";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.19;
  letter-spacing: -0.32px;

  @media (min-width: 768px) {
    margin: 0;
    font-size: 44px;
    line-height: 1.09;
    letter-spacing: -0.44px;
  }
`;
