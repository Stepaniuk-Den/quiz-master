import { useLocation } from "react-router";
import { FormFiltersWrapper } from "./QuizFilterToolsStyled";
import QuizeSearch from "../QuizesSearch/QuizesSearch";
import QuizFilterText from "../QuizFilterText/QuizFilterText";


const QuizeFilterTools = () => {
  const location = useLocation()
  const locationPath = location.pathname === '/discover'? true : false;
  return (
    <FormFiltersWrapper>
      <QuizeSearch />
      {locationPath && <QuizFilterText />}      
    </FormFiltersWrapper>
  );
};

export default QuizeFilterTools;
