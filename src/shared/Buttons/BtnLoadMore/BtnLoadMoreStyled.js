import styled from "styled-components";

export const ButtonS = styled.button`
  /* outline: 1px solid red; */
  border-color: transparent;
  background-color: transparent;
  color: var(--text-color-100);
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  line-height: 1.14;
  letter-spacing: -0.14px;
  text-decoration-line: underline;
  font-family: GilroyBold, sans-serif;
  
  @media (min-width: 768px) {
    font-size: 16px;
    letter-spacing: -0.16px;
    line-height: 1;
  }
`;
