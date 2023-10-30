import { useState } from "react";
import { useSelector } from "react-redux";
import QuizeFilterTools from "../../modules/ownQuizPage/components/QuizFilterTools/QuizFilterTools";
import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore";
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar";
import QuizesList from "../../shared/components/QuizesList/QuizesList";
import { PageWrapper, SectionWrapper } from "./OwnQuizePageStyled";
import { selectOwnQuizes } from "../../redux/selectors";

const OwnQuizPage = () => {  
  const allOwnQuizes = useSelector(selectOwnQuizes)  
  const [ownQuizesArr, setOwnQuizesArr] = useState(allOwnQuizes);
  
  const filteredQuizeCards = (filteredNames) => {    
    setOwnQuizesArr(filteredNames);
  };

  return (
    <PageWrapper>
      <SectionWrapper>
        <PageTopBar titlePage="My quiz" />
        <QuizeFilterTools filteredQuizeCards={filteredQuizeCards}/>
        <QuizesList quizzesArr={ownQuizesArr} className={"bottomVariant"}/>
        <BtnLoadMore />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default OwnQuizPage;
