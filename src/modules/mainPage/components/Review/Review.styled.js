import styled from "styled-components";

export const StyledReview = styled.div`
  height: 168px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid var(--border-color-60);

  div {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 12px;
  }

  div + div {
    height: 72px;
    overflow-y: scroll;
    display: inline-block;
    margin: 0;
  }

  div + div::-webkit-scrollbar {
    width: 5px;
    border-radius: 3px;
    background-color: var(--main-background);
  }

  div + div::-webkit-scrollbar-thumb {
    background-color: var(--text-color-50);
    border-radius: 3px;
  }

  p {
    letter-spacing: normal;
  }

  @media only screen and (max-width: 767.9px) {
    max-width: 335px;
  }
  
  @media only screen and (min-width: 768px) {
      padding: 24px;
    width: 704px;
    height: 144px;

    div + div {
    height: 40px;
  }
  }

  @media only screen and (min-width: 1440px) {
    width: 608px;
    height: 164px;


    div + div {
    height: 60px;
  }
  }
`;
