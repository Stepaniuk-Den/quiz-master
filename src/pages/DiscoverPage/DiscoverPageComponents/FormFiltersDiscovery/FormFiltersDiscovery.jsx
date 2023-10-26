import Select from "../../../../shared/Select/Select";
// import SelectCustom from "../Select/Select";
import { FormFiltersWrapper, PStyled, RatingBox, RatingStars, ResultBox, SelectWrapper, SpanStyled, TextWrapper } from "./FormFilterstDiscoveryStyled";

const FormFiltersDiscovery = () => {
  return (
    <FormFiltersWrapper>      
      <form>
        <SelectWrapper>
          <Select className="search" selectTitle='Search' options='options1'/>
          <Select className="filters" selectTitle='Filters' options='options2'/>
          <Select className="forChildren" selectTitle='For children' options='options3'/>
          <Select className="forAdults" selectTitle='For adults' options='options4'/>
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
