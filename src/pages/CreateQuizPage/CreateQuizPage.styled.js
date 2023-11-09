import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 80px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionWrapper = styled.section`
  width: 100%;
  max-width: 335px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;

  @media only screen and (min-width: 768px) {
    max-width: 702px;
  }

  @media only screen and (min-width: 1440px) {
    max-width: 1240px;
    flex-wrap: nowrap;
  }
`;

