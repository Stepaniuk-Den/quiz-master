//import { useState } from "react";
import { useSelector } from "react-redux";
import {
  BtnSearch,
  FiSearchS,
  FormWrapper,
  InputStyled,
} from "./QuizSearchStyled";
import { selectFavorite } from "../../../../redux/selectors";

const QuizeSearch = ({ filteredQuizeCards }) => {
  const favoriteAllQuizes = useSelector(selectFavorite) 
  // const [quizCollectionName, setQuizCollectionName] = useState("");
  // console.log("quizCollectionName: ", quizCollectionName);

  const handleFilterNames = (name) => {
    const filteredCategoryNames = favoriteAllQuizes.filter((quiz) =>
      quiz.categoryName.toLowerCase().includes(name)
    );    
    filteredQuizeCards(filteredCategoryNames);
    // setQuizCollectionName(name);
  };

  return (
    <FormWrapper>
      <BtnSearch type="submit">
        <FiSearchS />
      </BtnSearch>
      <InputStyled
        placeholder="Search"
        name="quizCollectionName"
        // value={quizCollectionName}
        type="text"
        autoComplete="on"
        autoFocus
        onChange={(evt) => handleFilterNames(evt.target.value)}
      />
    </FormWrapper>
  );
};

export default QuizeSearch;
