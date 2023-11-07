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
    padding-bottom: 32px;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
  }
`;

export const QuestionList = styled.ul`
  justify-content: space-between; 
  padding-bottom: 12px;
  display: flex;
  align-items: center;
  margin: 8px 0;
  list-style-type: none;
  border-bottom: 1px solid #ccc; 
`;

export const SelectStyledQuiz = styled.select`

  margin-top: 32px;
  width: 100%;
  max-width: 335px;
  height: 48px;
  padding: 15px 18px;
  border-radius: 30px;

  border: 1px solid var(--border-color-30);
  background-color: transparent;
  color: #F4F4F4;
  color: var(--text-color-100);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29; /* 128.571% */
  letter-spacing: -0.14px;
  /* Стилізація опцій (колір тексту та фону) */
  option {
    /* color: red; */
    background: blue; /* Колір фону опцій */
  }
`;
export const OptionSt = styled.option`
background:red;`
