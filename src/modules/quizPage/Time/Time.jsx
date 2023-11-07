import React, { useState, useEffect } from "react";
import { StyledCountdown, TimeText } from "./Time.styled";

const Time = ({ question, currentQuestion, isAnswerSelected }) => {
  const [timeRemaining, setTimeRemaining] = useState(question.time);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  useEffect(() => {
    setTimeRemaining(question.time);
  }, [question, currentQuestion]);

  useEffect(() => {
    let timer;

    if (!isAnswerSelected && timeRemaining > 0) {
      timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (isAnswerSelected) {
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isAnswerSelected, timeRemaining]);

  return (
    <>
      <TimeText>
        Time:
        <StyledCountdown>
          <span>{formatTime(timeRemaining)}</span>
        </StyledCountdown>
      </TimeText>
    </>
  );
};

export default Time;
