import { useSelector } from "react-redux";
import UserTestsSearch from "../../discoverFavoriteOwnquizCommonComponents/UserTestsSearch/UserTestsSearch";
import IconFilter from "../IconFilter/IconFilter";
import QuizSelect from "../QuizSelect/QuizSelect";
import { BtnSearch, FiSearchS, FormWrapper, SelectWrapper } from "./QuizesSearchStyled";
import { selectDiscoverAdult, selectDiscoverChildren } from "../../../../redux/selectors";

const QuizeSearch = () => {
  const allAdultCategories = useSelector(selectDiscoverAdult)
  console.log('allAdultCategories: ', allAdultCategories);
  const allChildrenCategories = useSelector(selectDiscoverChildren)
  
  return (
    <FormWrapper>
      <SelectWrapper>
      <BtnSearch type="submit">
        <FiSearchS />
      </BtnSearch>
        
        <UserTestsSearch />

        <IconFilter  />        
        
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
    </FormWrapper>
  );
};

export default QuizeSearch;
