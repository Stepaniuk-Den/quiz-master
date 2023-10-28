import UserTestsSearch from "../../discoverFavoriteOwnquizCommonComponents/UserTestsSearch/UserTestsSearch";
import IconFilter from "../IconFilter/IconFilter";
import QuizSelect from "../QuizSelect/QuizSelect";
import { SelectWrapper } from "./QuizesSearchStyled";

const QuizeSearch = () => {
  return (
    <form>
      <SelectWrapper>
        
        <UserTestsSearch />

        <IconFilter  />        
        
        <QuizSelect
          className="forChildren"
          selectTitle="For children"
          options="options3"
        />

        <QuizSelect
          className="forAdults"
          selectTitle="For adults"
          options="options4"
        />
      </SelectWrapper>
    </form>
  );
};

export default QuizeSearch;
