import { useDispatch, useSelector } from "react-redux";
import UserTestsSearch from "../../discoverFavoriteOwnquizCommonComponents/UserTestsSearch/UserTestsSearch";
import IconFilter from "../IconFilter/IconFilter";
import QuizSelect from "../QuizSelect/QuizSelect";
import {
  BtnSearch,
  FiSearchS,
  FormWrapper,
  SelectWrapper,
} from "./QuizesSearchStyled";
import { selectDiscoverAllCategories } from "../../../../redux/selectors";
import { useEffect, useState } from "react";
import { getFilteredQuizzesThunk, getQuizCategoriesThunk } from "../../../../redux/quiz/quizThunks";

const QuizeSearch = ({ handleCategorySelection, commonFilter }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuizCategoriesThunk());
  }, [dispatch]);
  const allCategories = useSelector(selectDiscoverAllCategories);  
  const [inputValue, setInputValue] = useState("");
  

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    console.log("form submited");    
    // dispatch(getFilteredQuizzesThunk(commonFilter))
    dispatch(getFilteredQuizzesThunk({inputValue, ...commonFilter}))
    // setInputValue("");
  };
  // temporary div
  return (
    <FormWrapper onSubmit={onFormSubmit}>
      <SelectWrapper>
        <BtnSearch type="submit">
          <FiSearchS />
        </BtnSearch>
        <UserTestsSearch
          inputValue={inputValue}
          setInputValue={setInputValue}
        />

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
