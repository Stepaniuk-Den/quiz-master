import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import QuestionCard from "../../modules/createQuizPage/components/QuestionCard/QuestionCard.jsx";
import QuestionsList from "../../modules/createQuizPage/components/QuestionsList/QuestionsList.jsx";
import SelectAttributeCard from "../../modules/createQuizPage/components/SelectAttributeCard/SelectAttributeCard.jsx";
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar.jsx";
import { PageWrapper, SectionWrapper } from "./CreateQuizPage.styled.js";
import { useDispatch, useSelector } from "react-redux";
import { getQuizCategoriesThunk } from "../../redux/quiz/quizThunks.js";
import { selectDiscoverAllCategories } from "../../redux/selectors.js";
import { boolean } from "yup";
import { useMediaQuery } from "react-responsive";

const CreateQuizPage = () => {
  const [currentQuiz, setCurrentQuiz] = useState({
    quizType: "adults",
    quizName: "",
  });
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "",
    quizType: "quize",
    /* 'true or false' */
  });
  const allCategories = useSelector(selectDiscoverAllCategories);
  const dispatch = useDispatch();
  const location = useLocation();
  // console.log('location: ', location.state.data);//id quiz

  const [isValue, setIsValue] = useState("");

  console.log("currentQuestion: ", currentQuestion);
  // console.log("isValue: ", isValue);

  const handleChangeAnswer = (evt) => {
    const currentAnswer = evt.target.value;
    setIsValue(currentAnswer);
    console.log(currentAnswer);
  };

  useEffect(() => {
    if (allCategories) return;
    dispatch(getQuizCategoriesThunk());
  }, [dispatch, allCategories]);

  const handleRadioChange = (event) => {
    const value = event.target.id;

    if (value === "children" || value === "adults") {
      setCurrentQuiz((prevState) => ({ ...prevState, quizType: value }));
    }
    setCurrentQuestion((prevState) => ({ ...prevState, background: value }));
  };

  const handleSelectCategory = (event) => {
    setCurrentQuiz((prevState) => ({
      ...prevState,
      quizCategory: event.target.value,
    }));
  };

  const handleQuizChange = (event) => {
    event.target.name === "quiz" &&
      setCurrentQuiz((prevState) => ({
        ...prevState,
        quizName: event.target.value,
      }));
    event.target.name === "question" &&
      setCurrentQuestion((prevState) => ({
        ...prevState,
        question: event.target.value,
      }));
  };

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <PageWrapper>
      <PageTopBar titlePage="Create quize" />
      <SectionWrapper>
        {isMobile && (
          <>
            <QuestionCard
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              handleQuizChange={handleQuizChange}
              // handleChangeAnswer={handleChangeAnswer}
              // currentValue={isValue}
            />
            <SelectAttributeCard
              audience={audience}
              changeAttribute={handleRadioChange}
              changeCategory={handleSelectCategory}
              color={color}
              categories={allCategories}
              categoryName={categoryName}
            />
            <QuestionsList />
          </>
        )}
        <QuestionsList />
        <QuestionCard
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          handleQuizChange={handleQuizChange}
          quiz={currentQuiz}
          handleChangeAnswer={handleChangeAnswer}
          currentValue={isValue}
        />
        <SelectAttributeCard
          quiz={currentQuiz}
          question={currentQuestion}
          changeAttribute={handleRadioChange}
          changeCategory={handleSelectCategory}
          categories={allCategories}
        />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default CreateQuizPage;
