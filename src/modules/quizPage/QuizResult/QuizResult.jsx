import React from 'react';
import { PageWrapper, QuizeBox } from './QuizResultStyled';
import RatingStars from '../../../shared/components/RatingStars/RatingStars';

const QuizResult =({ message }) => {
  return (
    <PageWrapper>
          <QuizeBox>
              <h2>The results</h2>
              <p>Correct answers</p>
              <p>{message}</p>
              <p>Rate the quiz</p>
              <RatingStars rate={1} />
      </QuizeBox>
    </PageWrapper>
  );
}

export default QuizResult;