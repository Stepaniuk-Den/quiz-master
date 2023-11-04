import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 14px 171px 14px 18px;
  border-radius: 30px;
  border: 1px solid rgba(244, 244, 244, 0.60);
  background-color: transparent;
  cursor: pointer;
  background-color: ${props =>
    props.isCorrect === 'correct' ? 'green' :
    props.isCorrect === 'incorrect' ? 'red' :
    'transparent'};
  color: ${props =>
    props.isCorrect === 'correct' ? 'white' :
    props.isCorrect === 'incorrect' ? 'white' :
    'black'};
`;
