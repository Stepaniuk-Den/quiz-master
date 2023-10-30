//import { useState } from "react";
import { useSelector } from "react-redux";
import { BtnSearch, FiSearchS, FormWrapper, InputStyled } from "./QuizSearchStyled";
import { selectOwnQuizes } from "../../../../redux/selectors";

const QuizeSearch = ({filteredQuizeCards}) => {
  const ownAllQuizes = useSelector(selectOwnQuizes)  
  // const [quizCollectionName, setQuizCollectionName] = useState("");
  // console.log("quizCollectionName: ", quizCollectionName);

  const handleFilterNames = (name) => {
    const filteredNames = ownAllQuizes.filter((quiz) =>
      quiz.categoryName.toLowerCase().includes(name)
    );
    filteredQuizeCards(filteredNames);    
    // setQuizCollectionName(name);
  };

  const handleSearchBtnClick =()=>{
    console.log("handleSearchBtnClick");
  }
  return (
    <FormWrapper>
      <BtnSearch type="button" onClick={handleSearchBtnClick}>
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
