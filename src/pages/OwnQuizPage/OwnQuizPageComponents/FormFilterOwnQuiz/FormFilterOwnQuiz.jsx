import React from "react";
import {
  FormFiltersWrapper,
  SelectWrapper,
} from "../../../DiscoverPage/DiscoverPageComponents/FormFiltersDiscovery/FormFilterstDiscoveryStyled";
import Select from "../../../../shared/Select/Select";

const FormFilterOwnQuiz = () => {
  return (
    <FormFiltersWrapper>
      <form>
        <SelectWrapper>
          <Select className="search" selectTitle="Search" options="options1" />
        </SelectWrapper>
      </form>
    </FormFiltersWrapper>
  );
};

export default FormFilterOwnQuiz;
