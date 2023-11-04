
import React from 'react';

const AnswerList =({ answers }) => {
  return (
    <div>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            {answer.answer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnswerList;
