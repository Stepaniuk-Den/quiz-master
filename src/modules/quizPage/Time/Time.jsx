import React from 'react';
import Countdown from 'react-countdown';

const Time = ({ nextQuestion, question,currentQuestion }) => {
  const onCountdownComplete = () => {
    nextQuestion(); 
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
      <div>
        <p>Time: 
        <Countdown
          date={Date.now() + question.time * 1000}
          key={currentQuestion}
          onComplete={onCountdownComplete}
                  renderer={({ minutes, seconds, completed }) => {
              
              return <span>{formatTime(minutes * 60 + seconds)}</span>;

          }}
        /></p>
      </div>
  );
};

export default Time;
