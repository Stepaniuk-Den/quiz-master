import React from 'react'
import { StyledAnswerWrapper, StyledInputAnswer, StyledInputCheckbox } from './AnswerCard.styled'

const AnswerCard = ({letter}) => {
  return (
    <StyledAnswerWrapper>
      <label htmlFor="answer"><p>{letter}:</p></label>
      <StyledInputAnswer type="text" id='answer' placeholder="Enter answer"/>
      <StyledInputCheckbox type="checkbox" name="" id="answer" />

      </StyledAnswerWrapper>
  )
}

export default AnswerCard