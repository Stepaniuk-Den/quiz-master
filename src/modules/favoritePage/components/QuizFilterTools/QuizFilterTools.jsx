//import { useLocation } from "react-router";
import { FormFiltersWrapper } from "./QuizFilterToolsStyled";
import QuizeSearch from "../QuizSearch/QuizSearch";


const QuizeFilterTools = ({filteredQuizeCards}) => {
  // const location = useLocation()
  // const locationPath = location.pathname === '/discover'? true : false;
  return (
    <FormFiltersWrapper>
      <QuizeSearch filteredQuizeCards={filteredQuizeCards}/>      
    </FormFiltersWrapper>
  );
};

export default QuizeFilterTools;
