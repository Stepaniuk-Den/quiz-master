// import Select from 'react-select';
//import { SelectStyled } from "./SelectStyled";

import { FiSearchS, Options, SelectStyled } from "./SelectStyled";

const SelectCustom = ({className, selectTitle, options}) => {
    // console.log(className);

    // const options = [
    //   { value: 'option1', label: 'Option 1' },
    //   { value: 'option2', label: 'Option 2' },
    //   { value: 'option3', label: 'Option 3' },
    // ];


  return (
    <>
      <SelectStyled className={className}>
                
        <Options value="">{selectTitle} <FiSearchS/></Options>
        <Options value="">{options}</Options>         
        <Options value="">{options}</Options>
      </SelectStyled>
    </>
  );
};

export default SelectCustom;
