import styled from "styled-components";

export const StyledReview = styled.div`
  width: 608px;
  height: 164px;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid var(--border-color-60);

  div{
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 12px;
  }

  p{
    letter-spacing: normal;
    max-height: 60px;
    overflow: scroll;
  }
`;
