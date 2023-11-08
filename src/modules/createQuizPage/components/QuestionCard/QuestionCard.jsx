import React, { useEffect, useRef, useState } from "react";
import {
  AnswerCardContainer,
  Down,
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownList,
  ImageWrapper,
  StyledImageNumberBlock,
  StyledInputQuestion,
  StyledInputTheme,
  StyledPlus,
  StyledQuestion,
  StyledQuestionCard,
  StyledQuestionWrapper,
  StyledTimeWrapper,
} from "./QuestionCard.styled";
import AnswerCard from "../AnswerCard/AnswerCard";

const QuestionCard = () => {
  const [isDropdownTimeOpen, setDropdownTimeOpen] = useState(false);
  const [isCurrentTime, setIsCurrentTime] = useState(null);
  const [isCurrentQuestion, setIsCurrentQuestion] = useState({
    time: null,
    theme: "",
    question: "",
    quiz: true,
  });

  const questionNumber = 7;
  const allQuestions = 10;

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownTimeOpen(!isDropdownTimeOpen);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(1, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const timeInSeconds = [30, 45, 60, 75, 90, 105, 120];
  const selectAnswers = ['A', 'B', 'C', 'D'];

  useEffect(() => {
    const handleDocumentTimeClick = (event) => {
      if (
        isDropdownTimeOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownTimeOpen(false);
      }
    };
    document.addEventListener("click", handleDocumentTimeClick);

    return () => {
      document.removeEventListener("click", handleDocumentTimeClick);
    };
  }, [isDropdownTimeOpen]);

  const handleClickTime = (evt) => {
    const currentTime = evt.target.textContent;
    const currentTimeId = evt.target.id;

    setIsCurrentTime(currentTime);
    setIsCurrentQuestion((prevState) => ({
      ...prevState,
      time: currentTimeId,
    }));
  };

  const handleSubmit = (evt, field) => {
    setIsCurrentQuestion((prevState) => ({
      ...prevState,
      [field]: evt.target.value,
    }));
  };

  return (
    <StyledQuestionWrapper>
      <StyledInputTheme
        type="text"
        placeholder="Quiz theme"
        name="theme"
        value={isCurrentQuestion.theme}
        onChange={(evt)=> handleSubmit(evt, "theme")}
      />
      <StyledQuestionCard>
        <StyledImageNumberBlock>
        <ImageWrapper>
          <StyledPlus />
        </ImageWrapper>
        <p>{questionNumber}/{allQuestions}</p>
        </StyledImageNumberBlock>
        <StyledQuestion>
          <StyledTimeWrapper>
            <p>Time:</p>
            <DropdownContainer ref={dropdownRef}>
              <DropdownButton onClick={toggleDropdown}>
                <p>{isCurrentTime}</p>
                {isDropdownTimeOpen ? (
                  <Down style={{ rotate: "180deg" }} />
                ) : (
                  <Down />
                )}
              </DropdownButton>
              <DropdownList open={isDropdownTimeOpen}>
                {timeInSeconds.map((el) => (
                  <DropdownItem
                    key={formatTime(el)}
                    id={el}
                    onClick={handleClickTime}
                  >
                    {formatTime(el)}
                  </DropdownItem>
                ))}
              </DropdownList>
            </DropdownContainer>
          </StyledTimeWrapper>
          <StyledInputQuestion
            type="text"
            name="question"
            placeholder="Enter a question"
            value={isCurrentQuestion.question}
            onChange={(evt)=> handleSubmit(evt, "question")}
          />
          <AnswerCardContainer>
        {selectAnswers.map((el) => (
          <AnswerCard key={el} />))}
        </AnswerCardContainer>
        </StyledQuestion>
      </StyledQuestionCard>
    </StyledQuestionWrapper>
  );
};

export default QuestionCard;
