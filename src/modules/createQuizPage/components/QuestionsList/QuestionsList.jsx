import React from 'react'
import { QuestionList, QuestionsWrapper } from './QuestionsList.styled'
import SelectCustom from '../../../../shared/components/Select/Select'

const QuestionsList = () => {
  return (
    <QuestionsWrapper>
          <p>Questions</p>
          <QuestionList>
            <li>quiz</li>
          </QuestionList>
          <SelectCustom name="create" id="" selectTitle={'selectTitle'}>
            create
          </SelectCustom>
        </QuestionsWrapper>
  )
}

export default QuestionsList