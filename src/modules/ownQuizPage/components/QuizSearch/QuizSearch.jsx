import UserTestsSearch from "../../../discoverPage/discoverFavoriteOwnquizCommonComponents/UserTestsSearch/UserTestsSearch";
import { BtnSearch, FiSearchS, FormWrapper, SelectWrapper } from "./QuizSearchStyled";

const QuizeSearch = () => {
  const handleSearchBtnClick =()=>{
    console.log("handleSearchBtnClick");
  }
  return (
    <FormWrapper>
      <BtnSearch type="button" onClick={handleSearchBtnClick}>
        <FiSearchS />
      </BtnSearch>
      <SelectWrapper>
        <UserTestsSearch />
      </SelectWrapper>
    </FormWrapper>
  );
};

export default QuizeSearch;
