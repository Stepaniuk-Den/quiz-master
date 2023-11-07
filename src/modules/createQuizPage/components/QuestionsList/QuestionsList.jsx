import React from "react";
import { OptionSt, QuestionList, QuestionsWrapper, SelectStyledQuiz } from "./QuestionsList.styled";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // для генерації унікальних ідентифікаторів
import { FiTrash2 } from 'react-icons/fi';

function QuestionsList() {
  const [selectedOption, setSelectedOption] = useState("Create");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event) => {
    const newOption = event.target.value;

    if (newOption) {
      setSelectedOptions([...selectedOptions, { id: uuidv4(), value: newOption }]);
      setSelectedOption("Create"); // встановлення "Create" після додавання нового пункту
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
        {selectedOptions.map((option, index) => (
          <QuestionList key={option.id}>
            {index + 1}. {option.value}{" "}
            <span
              role="button"
              onClick={() => handleDeleteOption(option.id)}
              style={{ cursor: "pointer" }}
            >
            <FiTrash2/>
            </span>
          </QuestionList>
        ))}
      </ul>
     
      <SelectStyledQuiz value={selectedOption} onChange={handleOptionChange}>
        <option value="Create">Create</option>
        <option value="Quiz">Quiz</option>
        <option value="True or false">True or false</option>
      </SelectStyledQuiz>
    </QuestionsWrapper>
  );
}

export default QuestionsList;

