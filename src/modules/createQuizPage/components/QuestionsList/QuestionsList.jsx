import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FiTrash2 } from "react-icons/fi";

import {
  QuestionsWrapper,
  QuestionList,
  Up,
  Down,
  DropdownList,
  DropdownContainer,
  DropdownButton,
  DropdownItem,
} from "./QuestionsList.styled";

function QuestionsList() {
  const maxVisibleOptions = 8;
  const [selectedOption, setSelectedOption] = useState("Create");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isDropdownTimeOpen, setDropdownTimeOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [quizItems, setQuizItems] = useState([]);
  const [selectedQuizItem, setSelectedQuizItem] = useState(null);

  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownTimeOpen(!isDropdownTimeOpen);
  };

  const handleOptionChange = (event) => {
    const newOption = event.target.value;

    if (newOption === "Create") {
      setSelectedOption("Create");
      setInputValue("");
      setQuizItems([]);
    } else {
      setSelectedOption(newOption);

      const optionToAdd = { id: uuidv4(), value: newOption };
      setSelectedOptions([...selectedOptions, optionToAdd]);
    }
  };

  const handleDeleteOption = (id) => {
    const updatedOptions = selectedOptions.filter((option) => option.id !== id);
    setSelectedOptions(updatedOptions);
  };

  const handleAddQuizItem = () => {
    if (inputValue.trim() !== "") {
      setQuizItems([...quizItems, { id: uuidv4(), value: inputValue }]);
      setInputValue("");
    }
  };

  const handleDeleteQuizItem = (id) => {
    const updatedQuizItems = quizItems.filter((item) => item.id !== id);
    setQuizItems(updatedQuizItems);
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
    <QuestionsWrapper>
      <p>Questions</p>
      <ul>
        {selectedOptions.slice(0, maxVisibleOptions).map((option, index) => (
          <QuestionList key={option.id}>
            {index + 1}. {option.value}{" "}
            <span
              role="button"
              onClick={() => handleDeleteOption(option.id)}
              style={{ cursor: "pointer" }}
            >
              <FiTrash2 />
            </span>
          </QuestionList>
        ))}
        {selectedOptions.length > maxVisibleOptions && (
          <QuestionList>
            {selectedOptions.length - maxVisibleOptions} more...
          </QuestionList>
        )}
      </ul>

      <DropdownContainer ref={dropdownRef}>
        <DropdownButton onClick={toggleDropdown} lab="true">
          {selectedOption === "Create" ? "Create" : selectedOption}
          {isDropdownTimeOpen ? <Up /> : <Down />}
        </DropdownButton>
        <DropdownList open={isDropdownTimeOpen}>
          <DropdownItem value="Quiz" onClick={() => setSelectedOption("Quiz")}>Quiz</DropdownItem>
          <DropdownItem value="True or false" onClick={() => setSelectedOption("True or false")}>True or false</DropdownItem>
        </DropdownList>
      </DropdownContainer>

      {selectedOption === "Quiz" && (
        <div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter a quiz item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleAddQuizItem}>Add Quiz Item</button>
          <ol>
            {quizItems.map((item, index) => (
              <li key={item.id}>
                {index + 1}. {item.value}{" "}
                <span
                  role="button"
                  onClick={() => handleDeleteQuizItem(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  <FiTrash2 />
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {selectedOption === "True or false" && (
        <div>
          <ol>
            {quizItems.map((item, index) => (
              <li key={item.id}>
                {index + 1}. {item.value}{" "}
                <span
                  role="button"
                  onClick={() => {
                    if (selectedQuizItem === item.id) {
                      setSelectedQuizItem(null);
                    } else {
                      setSelectedQuizItem(item.id);
                    }
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {selectedQuizItem === item.id ? "Selected" : "Select"}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </QuestionsWrapper>
  );
}

export default QuestionsList;
