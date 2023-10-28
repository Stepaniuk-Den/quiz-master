//import { useLocation } from "react-router";
import QuizeSearch from "../QuizSearch/QuizSearch";
import { FormFiltersWrapper } from "./QuizFilterToolsStyled";
//import QuizeSearch from "../QuizSearch/QuizSearch";

const QuizeFilterTools = () => {
  // const location = useLocation()
  // const locationPath = location.pathname === '/discover'? true : false;
  return (
    <FormFiltersWrapper>
      <QuizeSearch />
    </FormFiltersWrapper>
  );
};

export default QuizeFilterTools;
