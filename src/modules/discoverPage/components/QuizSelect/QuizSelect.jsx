import { useState } from "react";
import {
  OptionS,
  OptionsList,
  ButtonStyled,
  SelectWrapper,
  FaChevronDownS,
} from "./QuizSelectStyled";

const QuizSelect = ({ className, selectTitle, options }) => {
  // console.log(options);
  const [openSelect, setOpenSelect] = useState(false);

  const handleOnClickSelect = () => {
    setOpenSelect(!openSelect);
  };
  const handleCheckboxChange = (event) => {
    const checkboxId = event.target.id;
    const isChecked = event.target.checked;
    const categoryName = event.target.value;
    console.log(
      `Чекбокс с id ${checkboxId} (${categoryName}) отмечен: ${isChecked}`
    );
  };

  return (
    <>
      <SelectWrapper>
        <ButtonStyled className={className} onClick={handleOnClickSelect}>
          <p>{selectTitle}</p>
          <FaChevronDownS />
        </ButtonStyled>
        <OptionsList className={openSelect ? "openSelect" : ""}>
          {options.map((option) => (
            <OptionS key={option._id}>
              <input
                type="checkbox"
                id={option._id}
                className="custom-checkbox"
                value={option.categoryName}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={option._id}></label>
              <p>{option.categoryName}</p>
            </OptionS>
          ))}
        </OptionsList>
      </SelectWrapper>
    </>
  );
};

export default QuizSelect;
