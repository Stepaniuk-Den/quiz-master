import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserQuizzesThunk } from "../../redux/quiz/quizThunks";
import { selectOwnQuizes } from "../../redux/selectors";
import QuizeFilterTools from "../../modules/ownQuizPage/components/QuizFilterTools/QuizFilterTools";
import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore";
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar";
import QuizesList from "../../shared/components/QuizesList/QuizesList";
import { PageWrapper, SectionWrapper } from "./OwnQuizePageStyled";

const OwnQuizPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserQuizzesThunk());
  }, [dispatch]);

  const allOwnQuizes = useSelector(selectOwnQuizes);
  const [ownQuizesArr, setOwnQuizesArr] = useState();
  
  useEffect(() => {
    setOwnQuizesArr(allOwnQuizes);
  }, [allOwnQuizes]);

  const filteredQuizeCards = (name) => {
    const filteredNames = allOwnQuizes.filter((quiz) =>
      quiz?.quizName?.includes(name)
    );
    setOwnQuizesArr(filteredNames);
  };

  const handleLoadMore = () => {
    console.log("BtnLoadMore");
  };

  return (
    <PageWrapper>
      <SectionWrapper>
        <PageTopBar titlePage="My quiz" />
        <QuizeFilterTools filteredQuizeCards={filteredQuizeCards} />
        <QuizesList quizzesArr={ownQuizesArr} className={"bottomVariant"} />
        <BtnLoadMore handleLoadMore={handleLoadMore} />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default OwnQuizPage;
