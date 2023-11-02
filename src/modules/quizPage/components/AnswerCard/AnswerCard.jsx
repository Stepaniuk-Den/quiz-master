import { useEffect, useState } from "react";

const AnswerCard = ({ question, options, correctAnswer, onNext, onBack, questionNumber, totalQuestions }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const timerDuration = 30; // Длительность таймера в секундах
  const [timer, setTimer] = useState(timerDuration);

  // Запуск таймера при монтировании компонента
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        setIsTimeUp(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleOptionSelect = (option) => {
    if (!isCorrect && !isTimeUp) {
      setSelectedOption(option);
      if (option === correctAnswer) {
        setIsCorrect(true);
      }
    }
  };

  const handleNextClick = () => {
    onNext(isCorrect);
  };

  const handleBackClick = () => {
    onBack();
  };

  return (
    <div>
      <div>
        <h2>
          Question {questionNumber}/{totalQuestions}
        </h2>
        <p>{question}</p>
      </div>
      <div>
        <p>Time left: {timer} seconds</p>
      </div>
      <div>
        {options.map((option, index) => (
          <button
            key={index}
            className={`option ${selectedOption === option ? "selected" : ""} ${
              isCorrect ? "correct" : ""
            } ${isTimeUp && option === correctAnswer ? "correct" : ""}`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div>
        <button
          onClick={handleBackClick}
          disabled={questionNumber === 1}
        >
          Back
        </button>
        <button
          onClick={handleNextClick}
          disabled={!selectedOption || isTimeUp}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AnswerCard;
