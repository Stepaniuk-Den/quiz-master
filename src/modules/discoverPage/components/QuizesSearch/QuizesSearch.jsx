import { useSelector } from "react-redux";
import UserTestsSearch from "../../discoverFavoriteOwnquizCommonComponents/UserTestsSearch/UserTestsSearch";
import IconFilter from "../IconFilter/IconFilter";
import QuizSelect from "../QuizSelect/QuizSelect";
import {
  BtnSearch,
  FiSearchS,
  FormWrapperDiv,
  SelectWrapper,
} from "./QuizesSearchStyled";
import {
  selectDiscoverAdult,
  selectDiscoverChildren,
} from "../../../../redux/selectors";

const QuizeSearch = () => {
  const allAdultCategories = useSelector(selectDiscoverAdult);
  const allChildrenCategories = useSelector(selectDiscoverChildren);

  const onFormSubmit = () => {
    console.log("form submited");
  };
  // temporary div
  return (
    <FormWrapperDiv onSubmit={onFormSubmit}>
      <SelectWrapper>
        <BtnSearch type="submit">
          <FiSearchS />
        </BtnSearch>

        <UserTestsSearch />

        <IconFilter />

        <QuizSelect
          className="forChildren"
          selectTitle="For children"
          options={allChildrenCategories}
        />
        <QuizSelect
          className="forAdults"
          selectTitle="For adults"
          options={allAdultCategories}
        />
      </SelectWrapper>
    </FormWrapperDiv>
  );
};

export default QuizeSearch;
