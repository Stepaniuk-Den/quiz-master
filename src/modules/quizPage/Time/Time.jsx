import React from 'react';
import Countdown from 'react-countdown';

const Time = ({ question, currentQuestion, isAnswerSelected }) => {
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
                renderer={({ minutes, seconds, completed }) => {
                    if (completed || isAnswerSelected) {
                        // Якщо таймер завершено або ви обрали відповідь, зупиняємо лічильник
                        return <span>{formatTime(0)}</span>;
                    } else {
                        return <span>{formatTime(minutes * 60 + seconds)}</span>;
                    }
                }}
            /></p>
        </div>
    );
};

export default Time;

