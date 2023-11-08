import React from 'react'
import { StyledAnswerWrapper, StyledInputAnswer, StyledInputCheckbox } from './AnswerCard.styled'

const AnswerCard = () => {
  return (
    <StyledAnswerWrapper>
      <label htmlFor="answer"><p>A:</p></label>
      <StyledInputAnswer type="text" id='answer' placeholder="Enter answer"/>
      <StyledInputCheckbox type="checkbox" name="" id="answer" />

      </StyledAnswerWrapper>
  )
}

export default AnswerCard