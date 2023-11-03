//import { useState } from "react";
import { BtnSearch, FiSearchS, FormWrapper, InputStyled } from "./QuizSearchStyled";


const QuizeSearch = ({filteredQuizeCards}) => {  
  // const [quizCollectionName, setQuizCollectionName] = useState("");
  

  const handleFilterNames = (name) => {    
    filteredQuizeCards(name);        
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
