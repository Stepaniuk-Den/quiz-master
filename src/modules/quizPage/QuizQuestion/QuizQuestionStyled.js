import styled from "styled-components";


// export const = styled
export const TitleQuestion = styled.h2`
color: #F4F4F4;
font-size: 24px;

font-weight: 700;
line-height: 32px;
letter-spacing: -0.24px;
margin-bottom:40px;`

export const NextButton = styled.button`
padding: 16px 62px;
border-radius: 30px;
background: #205BF1;`

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
