import styled from "styled-components";

export const PageWrapper = styled.div`
  /* outline: 1px solid green; */
  padding: 80px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionWrapper = styled.section`
  /* outline: 1px solid red; */
  width: 100%;
  max-width: 1240px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: var(--white-background);
  width: 343px;
  height: 589px;
  padding: 32px;

  & p {
    font-size: 24px;
    font-family: "GilroyBold";
    /* font-weight: 700; */
    line-height: 32px; /* 133.333% */
  }
`;

export const QuestionList = styled.ul`
  margin-top: 32px;
`;
