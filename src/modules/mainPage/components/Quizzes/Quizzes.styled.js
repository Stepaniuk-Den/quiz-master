import styled from "styled-components";

export const StyledQuizzes = styled.section`
  width: 100%;

  h2 {
    margin-bottom: 24px;
  }

  p {
    display: inline-block;
    width: 660px;
  }

  h2 + div{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 48px;
  }
`;
