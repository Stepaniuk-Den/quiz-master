import SelectCustom from "../../../../shared/Select/Select";

import {
  FormFiltersWrapper,
  PStyled,
  RatingBox,
  RatingStars,
  ResultBox,  
  SelectWrapper,
  SpanStyled,
  TextWrapper,
} from "./FormFilterstDiscoveryStyled";


const FormFiltersDiscovery = () => {
  return (
    <FormFiltersWrapper>
      <form>
        <SelectWrapper>
          <SelectCustom
            className="search"
            selectTitle="Search"
            options="options1"
          />
          <SelectCustom
            className="filters"
            selectTitle="Filters"
            options="options2"
          />
          <SelectCustom
            className="forChildren"
            selectTitle="For children"
            options="options3"
          />
          <SelectCustom
            className="forAdults"
            selectTitle="For adults"
            options="options4"
          />          
        </SelectWrapper>

        <TextWrapper>
          <ResultBox>
            <SpanStyled>Result:</SpanStyled>
            <PStyled>74</PStyled>
            <SpanStyled>
              (For adults, themes: Cinema, Science, Literature)
            </SpanStyled>
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
