import { FormFiltersWrapper } from "./QuizFilterToolsStyled";
import QuizeSearch from "../QuizesSearch/QuizesSearch";
import QuizFilterText from "../QuizFilterText/QuizFilterText";


const QuizeFilterTools = () => {
  
  return (
    <FormFiltersWrapper>
      <QuizeSearch />      
      <QuizFilterText />
    </FormFiltersWrapper>
  );
};

export default QuizeFilterTools;
