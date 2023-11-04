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
  selectDiscoverAllCategories,  
} from "../../../../redux/selectors";

const QuizeSearch = ({handleCategorySelection}) => {
  const allCategories = useSelector(selectDiscoverAllCategories);
  // console.log('allCategories: ', allCategories);

  

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
          options={allCategories?.children}
          handleCategorySelection={handleCategorySelection}
        />
        <QuizSelect
          className="forAdults"
          selectTitle="For adults"
          options={allCategories?.adults}
          handleCategorySelection={handleCategorySelection}
        />
      </SelectWrapper>
    </FormWrapper>
  );
};

export default QuizeSearch;
