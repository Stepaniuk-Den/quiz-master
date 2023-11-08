import styled from "styled-components";

export const StyledAnswerWrapper = styled.li`
  display: flex;
  width: 222px;
  height: 68px;
  padding: 14px 18px;
  align-items: start;

  border-radius: 4px;
  border: 1px solid var(--border-color-60);
`;

export const StyledInputAnswer = styled.input`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  max-width: 80%;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: transparent;
  color: var(--text-color-100);
  &::placeholder {
    color: var(--text-color-100);
  }
`;

export const StyledInputCheckbox = styled.input`
  margin-left: auto;
  background-color: transparent;
  border-radius: 15px;
  border: 1px solid var(--border-color-60);
`;
