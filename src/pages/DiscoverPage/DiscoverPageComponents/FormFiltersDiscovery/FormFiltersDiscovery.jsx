import { MenuItem } from "@mui/material";
import SelectCustom from "../../../../shared/Select/Select";
// import Select from "../../../../shared/Select/Select";
// import SelectCustom from "../Select/Select";
import { FormFiltersWrapper, PStyled, RatingBox, RatingStars, ResultBox, SelectMUI, SelectWrapper, SpanStyled, TextWrapper } from "./FormFilterstDiscoveryStyled";
//import { Select } from '@mui/material'

const FormFiltersDiscovery = () => {
  return (
    <FormFiltersWrapper>      
      <form>
        <SelectWrapper>
          <SelectCustom className="search" selectTitle='Search' options='options1'/>
          <SelectCustom className="filters" selectTitle='Filters' options='options2'/>
          <SelectCustom className="forChildren" selectTitle='For children' options='options3'/>
          <SelectCustom className="forAdults" selectTitle='For adults' options='options4'/>
          <SelectMUI 
          //  classNamePrefix="customSelect"
          // classes={myStyle}
           >
            <MenuItem value="option1">Option 1</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
      <MenuItem value="option3">Option 3</MenuItem>


           </SelectMUI>
        </SelectWrapper>

        <TextWrapper>
          <ResultBox>
            <SpanStyled>Result:</SpanStyled>
            <PStyled>74</PStyled>
            <SpanStyled>(For adults, themes: Cinema, Science, Literature)</SpanStyled>
          </ResultBox>
          <RatingBox>
            <SpanStyled>Specify the desired rating:</SpanStyled>
            <RatingStars>*****</RatingStars>
          </RatingBox>
        </TextWrapper>
      </form>
    </FormFiltersWrapper>
  );
};

export default FormFiltersDiscovery;
