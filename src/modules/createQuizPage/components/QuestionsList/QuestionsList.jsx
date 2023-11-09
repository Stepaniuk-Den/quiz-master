import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { FiTrash2 } from "react-icons/fi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";
import {
  QuestionsWrapper,
  QuestionList,
  SelectStyledQuiz,
  DropdownList, 
} from "./QuestionsList.styled";


function QuestionsList() {
  const maxOptions = 10;
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAdd = (value) => {
    if (selectedOptions.length < maxOptions) {
      setSelectedOptions([
        ...selectedOptions,
        { id: uuidv4(), value: value },
      ]);
    }
  };

  const handleDeleteOption = (id) => {
    const updatedOptions = selectedOptions.filter((option) => option.id !== id);
    setSelectedOptions(updatedOptions);
  };

  return (
    <QuestionsWrapper>
      <p>Questions</p>
      <ul style={{ maxHeight: isDropdownOpen ? "200px" : "auto", overflowY: "auto" }}>
        {selectedOptions.map((option, index) => (
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
      </ul>
      <SelectStyledQuiz
        onClick={() => {
          setIsDropdownOpen(!isDropdownOpen);
        }}
      >
        Create
        {isDropdownOpen ? (
          <FiChevronUp size={16} />
        ) : (
          <FiChevronDown size={16} />
        )}
      </SelectStyledQuiz>
      {isDropdownOpen && (
        <DropdownList>
          <ul>
            <li>
              <button onClick={() => handleAdd("Quiz")}>
                Quiz <HiArrowLongRight size={24} />
              </button>
            </li>
            <li>
              <button onClick={() => handleAdd("True or false")}>
                True or false <HiArrowLongRight size={24} />
              </button>
            </li>
          </ul>
        </DropdownList>
      )}
    </QuestionsWrapper>
  );
}

export default QuestionsList;