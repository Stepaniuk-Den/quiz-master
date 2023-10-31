import { Options, SelectStyled } from "./QuizSelectStyled";

//import { FiSearchS, Options, SelectStyled } from "./SelectStyled";

const QuizSelect = ({ className, selectTitle, options }) => {
  // console.log(options);

  return (
    <>
      <SelectStyled className={className}>
        <Options value="">{selectTitle}</Options>
        {options.map((option) => (
          <Options key={option._id} value="">
            {option.categoryName}
          </Options>
        ))}
      </SelectStyled>
    </>
  );
};

export default QuizSelect;
