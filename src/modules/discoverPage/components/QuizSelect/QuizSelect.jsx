import { Options, SelectStyled } from "./QuizSelectStyled";

//import { FiSearchS, Options, SelectStyled } from "./SelectStyled";

const QuizSelect = ({className, selectTitle, options}) => {
    // console.log(className);

    // const options = [
    //   { value: 'option1', label: 'Option 1' },
    //   { value: 'option2', label: 'Option 2' },
    //   { value: 'option3', label: 'Option 3' },
    // ];

    // <FiSearchS/>
  return (
    <>
      <SelectStyled className={className}>
                
        <Options value="">{selectTitle}</Options>
        <Options value="">{options}</Options>         
        <Options value="">{options}</Options>
      </SelectStyled>
    </>
  );
};

export default QuizSelect;
