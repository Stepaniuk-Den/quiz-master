import { FormFiltersWrapper } from "./QuizFilterToolsStyled";
import QuizeSearch from "../QuizesSearch/QuizesSearch";
import QuizFilterText from "../QuizFilterText/QuizFilterText";

const QuizeFilterTools = ({
  handleStarSelection,
  handleCategorySelection,
  totalResults,
  selectTitles,
  categoryName
}) => {
  return (
    <FormFiltersWrapper>
      <QuizeSearch handleCategorySelection={handleCategorySelection} />
      <QuizFilterText
        handleStarSelection={handleStarSelection}
        totalResults={totalResults}
        selectTitles={selectTitles}
        categoryName={categoryName}
      />
    </FormFiltersWrapper>
  );
};

export default QuizeFilterTools;
