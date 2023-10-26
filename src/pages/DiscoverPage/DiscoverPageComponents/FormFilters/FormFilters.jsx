import { FormFiltersWrapper, RatingWrapper, SelectWrapper, TextWrapper } from "./FormFilterstStyled";

const FormFilters = () => {
  return (
    <FormFiltersWrapper>
      <div>FormSelect</div>
      <form>
        <SelectWrapper>
          <select>Icon Search</select>
          <select>Icon Filters</select>
          <select>For Children</select>
          <select>For Adults</select>
        </SelectWrapper>

        <TextWrapper>
          <div>
            <span>Result:</span>
            <span>74</span>
            <span>(For adults, themes: Cinema, Science, Literature)</span>
          </div>
          <RatingWrapper>
            <span>Specify the desired rating:</span>
            <div>*****</div>
          </RatingWrapper>
        </TextWrapper>
      </form>
    </FormFiltersWrapper>
  );
};

export default FormFilters;
