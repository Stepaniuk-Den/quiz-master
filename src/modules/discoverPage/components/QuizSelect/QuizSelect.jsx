import { useEffect, useRef, useState } from "react";
import {
  OptionS,
  OptionsList,
  ButtonStyled,
  SelectWrapper,
  FaChevronDownS,
} from "./QuizSelectStyled";

const QuizSelect = ({
  className,
  selectTitle,
  options,
  handleCategorySelection,
}) => {
  const [openSelect, setOpenSelect] = useState(false);

  // const backgroundRef = useRef(null);
  // useEffect(() => {
  //   const handleDocumentClick = (event) => {
  //     console.log(1, openSelect);
  //     console.log(2, backgroundRef.current);
  //     console.log(3, !backgroundRef.current?.contains(event.target));
  //     if (
  //       // openSelect &&
  //       // backgroundRef.current &&
  //       // !backgroundRef.current.contains(event.target)
  //       openSelect &&
  //       backgroundRef.current &&
  //       !backgroundRef.current?.contains(event.target)
  //     ) {
  //       // setOpenSelect(false);
  //     }
  //   };
  //   document.addEventListener("click", handleDocumentClick);

  //   return () => {
  //     document.removeEventListener("click", handleDocumentClick);
  //   };
  // }, [openSelect]);

  const handleOnClickSelect = () => {
    setOpenSelect(!openSelect);
  };

  const handleCheckboxChange = (event) => {
    handleCategorySelection(event, selectTitle);
  };

  // const handleClickBackground = (event) => {
  //   if (event.target === event.currentTarget) {
  //     document.body.classList.remove("openSelect");      
  //   }
  // };
  // document.addEventListener('click', handleClickBackground);
  // document.removeEventListener('click', handleClickBackground)
  

  return (
    <>
      <SelectWrapper
       //ref={backgroundRef}
       >
        <ButtonStyled
          type="button"
          className={className}
          onClick={handleOnClickSelect}
        >
          <p>{selectTitle}</p>
          <FaChevronDownS />
        </ButtonStyled>
        <OptionsList className={openSelect ? "openSelect" : ""}>
          {options?.map((option) => (
            <OptionS key={option?._id}>
              <input
                type="checkbox"
                id={option?._id}
                className="custom-checkbox"
                value={option?.categoryName}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={option?._id}>
                <p>{option?.categoryName}</p>
              </label>
            </OptionS>
          ))}
        </OptionsList>
      </SelectWrapper>
    </>
  );
};

export default QuizSelect;
