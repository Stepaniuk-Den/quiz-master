import React, { useEffect, useRef, useState } from "react";
import {
  AnswerCardContainer,
  BtnContainer,
  Down,
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownList,
  ImageWrapper,
  StyledBtnCancel,
  StyledBtnSave,
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
import { useMediaQuery } from "react-responsive";

const QuestionCard = ({
  currentQuestion,
  setCurrentQuestion,
  handleQuizChange,
  quiz,
  handleChangeAnswer,
  currentValue,
}) => {
  const [isDropdownTimeOpen, setDropdownTimeOpen] = useState(false);
  const [isCurrentTime, setIsCurrentTime] = useState(null);
  const [isChecked, setChecked] = useState("");

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
  const selectAnswers =
    currentQuestion.quizType === "quiz" ? ["A", "C", "B", "D"] : ["A", "C"];

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
    setCurrentQuestion((prevState) => ({
      ...prevState,
      time: currentTimeId,
    }));
  };

  const handleRadioChange = (event) => {
    const value = event.target.id;
    setChecked(value);
    let fields = {};
    selectAnswers.forEach(
      (item, idx) =>
        (fields = {
          ...fields,
          [`answers[${idx}][answer]`]: idx === 0 ? "True" : "False",
          [`answers[${idx}][correctAnswer]`]: value === item ? true : false,
        })
    );
    setCurrentQuestion((prevState) => ({
      ...prevState,
      ...fields,
    }));
  };

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1439px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  return (
    <StyledQuestionWrapper>
      <StyledInputTheme
        type="text"
        placeholder="Quiz theme"
        name="quiz"
        value={quiz.quizName}
        onChange={handleQuizChange}
      />
      <StyledQuestionCard>
        {isDesktop ? (
          <StyledImageNumberBlock>
            <ImageWrapper>
              <StyledPlus />
            </ImageWrapper>
            <p>
              {questionNumber}/{allQuestions}
            </p>
          </StyledImageNumberBlock>
        ) : (
          <ImageWrapper>
            <StyledPlus />
          </ImageWrapper>
        )}
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
            value={currentQuestion.question}
            onChange={handleQuizChange}
          />
          <AnswerCardContainer>
            {selectAnswers.map((el) => (
              <AnswerCard
                key={el}
                letter={el}
                checked={isChecked}
                changeAttribute={handleRadioChange}
                quizType={currentQuestion.quizType}
                changeAnswer={handleChangeAnswer}
                currentValue={currentValue}
              />
            ))}
          </AnswerCardContainer>
          <BtnContainer>
            <StyledBtnSave>Save</StyledBtnSave>
            <StyledBtnCancel>Cancel</StyledBtnCancel>
          </BtnContainer>
        </StyledQuestion>
        {isDesktop ? null : (
          <p>
            {questionNumber}/{allQuestions}
          </p>
        )}
      </StyledQuestionCard>
    </StyledQuestionWrapper>
  );
};

export default QuestionCard;
