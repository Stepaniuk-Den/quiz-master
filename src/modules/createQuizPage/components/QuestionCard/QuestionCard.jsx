import React, { useEffect, useRef, useState } from "react";
import {
  Down,
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownList,
  ImageWrapper,
  StyledInputQuestion,
  StyledInputTheme,
  StyledPlus,
  StyledQuestion,
  StyledQuestionCard,
  StyledQuestionWrapper,
  StyledSelectTime,
  StyledTimeWrapper,
  Up,
} from "./QuestionCard.styled";

const QuestionCard = () => {
  const [isDropdownTimeOpen, setDropdownTimeOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownTimeOpen(!isDropdownTimeOpen);
  };

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

  return (
    <StyledQuestionWrapper>
      <StyledInputTheme type="text" placeholder="Quiz theme" />
      <StyledQuestionCard>
        <ImageWrapper>
          <StyledPlus />
        </ImageWrapper>
        <StyledQuestion>
          <StyledTimeWrapper>
            <p>Time:</p>
            <DropdownContainer ref={dropdownRef}>
              <DropdownButton onClick={toggleDropdown}>
                {isDropdownTimeOpen ? <Up /> : <Down />}
              </DropdownButton>
              <DropdownList open={isDropdownTimeOpen}>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Feedback</DropdownItem>
                <DropdownItem>Log out</DropdownItem>
              </DropdownList>
            </DropdownContainer>
          </StyledTimeWrapper>
          <StyledInputQuestion
            type="text"
            name="question"
            placeholder="Enter a question"
          />
        </StyledQuestion>
      </StyledQuestionCard>
    </StyledQuestionWrapper>
  );
};

export default QuestionCard;
