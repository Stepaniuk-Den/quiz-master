import styled from "styled-components";

export const StyledAnswerWrapper = styled.li`
  display: flex;
  width: 222px;
  height: 68px;
  height: ${(props) => (props.quiz ? '68px' : '44px')};
  padding: 14px 18px;
  align-items: start;

  border-radius: 15px;
  border: 1px solid var(--border-color-60);
`;

export const StyledLabelAnswer = styled.label`
  position: relative;
  display: flex;
  max-width: 100%;
  justify-content: start;
  align-items: center;

  & span {
    cursor: pointer;
    height: 14px;
    width: 14px;
    border-radius: 4px;
    border: 1px solid var(--border-color-60);
    display: block;
    position: absolute;
    right: 0;
    top: 1px;
  }

  & span:after {
    content: "";
    position: absolute;
    height: 12px;
    width: 12px;
    background: #205bf1;
    display: block;
    border-radius: 3px;
    transform: scale(0);
    left: 50%;
    top: 50%;
  }

  & input[type="radio"]:checked ~ span:after {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const StyledAnswerBoolean = styled.p`
display: flex;
width: 80%;
padding: 0 4px;
`;
export const StyledInputAnswer = styled.input`
  display: flex;
  /* flex-wrap: wrap; */
  padding: 0 4px;
  width: 80%;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: transparent;
  color: var(--text-color-100);
  &::placeholder {
    color: var(--text-color-100);
  }
`;

export const StyledInputRadio = styled.input`
  margin-left: auto;
  /* display: none; */
  position: absolute;
  z-index: 1;
  right: 0;
    top: 1px;
  opacity: 0;
  cursor: pointer;
`;
