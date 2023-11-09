import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FiTrash2 } from "react-icons/fi";
import {
  QuestionsWrapper,
  QuestionList,
  SelectStyledQuiz,
  Up,
  Down,
  DropdownList, // компонент для випадаючого списку
} from "./QuestionsList.styled";

function QuestionsList() {
  const maxVisibleOptions = 8; // Максимальна кількість видимих пунктів
  const [selectedOption, setSelectedOption] = useState("Create");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionChange = (event) => {
    const newOption = event.target.value;

    if (newOption) {
      setSelectedOptions([...selectedOptions, { id: uuidv4(), value: newOption }]);
      setSelectedOption("Create");
    }
  };

  const handleDeleteOption = (id) => {
    const updatedOptions = selectedOptions.filter((option) => option.id !== id);
    setSelectedOptions(updatedOptions);
  };

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

      <SelectStyledQuiz
        value={selectedOption}
        onChange={handleOptionChange}
        // isdropdownopen={isDropdownOpen}
      >
        <option value="Create">Create</option>
        <option value="Quiz">Quiz</option>
        <option value="True or false">True or false</option>
      </SelectStyledQuiz>
      {isDropdownOpen && ( // показувати випадаючий список, якщо isDropdownOpen = true
        <DropdownList>
          <option value="Quiz">
            Quiz {isDropdownOpen ? <Up /> : <Down />}
          </option>
          <option value="True or false">
            True or false {isDropdownOpen ? <Up /> : <Down />}
          </option>
        </DropdownList>
      )}
    </QuestionsWrapper>
  );
}

export default QuestionsList;
