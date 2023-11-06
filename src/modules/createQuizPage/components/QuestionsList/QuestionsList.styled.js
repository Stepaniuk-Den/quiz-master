import styled from "styled-components";


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
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
  }
`;

export const QuestionList = styled.ul`
  margin-top: 32px;
`;
