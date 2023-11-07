import { v4 as uuidv4 } from "uuid";
import { FiTrash2 } from "react-icons/fi";
import {
  QuestionsWrapper,
  QuestionList,
  SelectStyledQuiz,
  Up,
  Down,
} from "./QuestionsList.styled";
import { useState } from "react";

function QuestionsList() {
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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectChange = (event) => {
    if (!event.target.matches(".up-icon, .down-icon")) {
      toggleDropdown();
    }
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
              <FiTrash2 />
            </span>
          </QuestionList>
        ))}
      </ul>

      <SelectStyledQuiz
        value={selectedOption}
        onChange={handleOptionChange}
        onClick={handleSelectChange}
      >
        <option value="Create">Create</option>
        <option value="Quiz">
          Quiz <span className="up-icon">{isDropdownOpen ? <Up /> : ""}</span>{" "}
          <span className="down-icon">{isDropdownOpen ? "" : <Down />}</span>
        </option>
        <option value="True or false">
          True or false{" "}
          <span className="up-icon">{isDropdownOpen ? <Up /> : ""}</span>{" "}
          <span className="down-icon">{isDropdownOpen ? "" : <Down />}</span>
        </option>
      </SelectStyledQuiz>
    </QuestionsWrapper>
  );
}

export default QuestionsList;
