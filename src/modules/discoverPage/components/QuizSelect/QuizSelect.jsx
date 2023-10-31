import {
  OptionS,
  OptionsList,
  ButtonStyled,
  SelectWrapper,
} from "./QuizSelectStyled";

//import { FiSearchS, Options, SelectStyled } from "./SelectStyled";

const QuizSelect = ({ className, selectTitle, options }) => {
  // console.log(options);

  return (
    // <>
    //   <SelectStyled className={className}>
    //     {/* <div style={{outline: '1px solid red'}}> */}
    //     <Options value="">{selectTitle}</Options>
    //     {options.map((option) => (
    //       <Options key={option._id} value="">
    //         {option.categoryName}
    //       </Options>
    //     ))}
    //     {/* </div> */}
    //   </SelectStyled>
    // </>
    <>
      <SelectWrapper>
        <ButtonStyled className={className}>{selectTitle}</ButtonStyled>
        <OptionsList>
          {options.map(option => <OptionS key={option._id} value=""><input type="checkbox"/>{option.categoryName}</OptionS>)}          
        </OptionsList>
        
      </SelectWrapper>
    </>
  );
};

export default QuizSelect;
