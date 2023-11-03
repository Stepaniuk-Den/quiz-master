//import { useState } from "react";
import {
  BtnSearch,
  FiSearchS,
  FormWrapper,
  InputStyled,
} from "./QuizSearchStyled";

const QuizeSearch = ({ filteredQuizeCards }) => {  
  // const [quizCollectionName, setQuizCollectionName] = useState("");  

  const handleFilterNames = (name) => {    
    filteredQuizeCards(name);    
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
