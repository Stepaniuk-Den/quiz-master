import { useSelector } from "react-redux";
import UserTestsSearch from "../../discoverFavoriteOwnquizCommonComponents/UserTestsSearch/UserTestsSearch";
import IconFilter from "../IconFilter/IconFilter";
import QuizSelect from "../QuizSelect/QuizSelect";
import {
  BtnSearch,
  FiSearchS,
  FormWrapper,
  SelectWrapper,
} from "./QuizesSearchStyled";
import {
  selectDiscoverAdult,
  selectDiscoverChildren,
} from "../../../../redux/selectors";

const QuizeSearch = ({handleCategorySelection}) => {
  const allAdultCategories = useSelector(selectDiscoverAdult);
  const allChildrenCategories = useSelector(selectDiscoverChildren);

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    console.log("form submited");
  };
  // temporary div
  return (
    <FormWrapper onSubmit={onFormSubmit}>
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
          handleCategorySelection={handleCategorySelection}          
        />
        {/* <QuizSelect
          className="forAdults"
          selectTitle="For adults"
          options={allAdultCategories}
        /> */}
      </SelectWrapper>
    </FormWrapper>
  );
};

export default QuizeSearch;
