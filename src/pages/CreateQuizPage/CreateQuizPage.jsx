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
import { useMediaQuery } from "react-responsive";

const CreateQuizPage = () => {
  const [currentQuiz, setCurrentQuiz] = useState({
    quizType: "adults",
    quizName: "",
  });
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "",
    type: "quiz",
    /* quiz    true or false */
  });
  const allCategories = useSelector(selectDiscoverAllCategories);
  const dispatch = useDispatch();
  // const location = useLocation();
  // console.log('location: ', location.state.data);//id quiz

  console.log("currentQuiz: ", currentQuiz);
  console.log("currentQuestion: ", currentQuestion);
  // console.log("isValue: ", isValue);

  const selectAnswers =
    currentQuestion.type === "quiz" ? ["A", "C", "B", "D"] : ["A", "C"];

  useEffect(() => {
    if (allCategories) return;
    dispatch(getQuizCategoriesThunk());
  }, [dispatch, allCategories]);

  const handleRadioChange = (event) => {
    const value = event.target.id;
    const name = event.target.name;

    if (name === "children" || name === "adults")
      return setCurrentQuiz((prevState) => ({
        ...prevState,
        quizType: value,
        quizCategory: "",
      }));

    name === "background" &&
      setCurrentQuestion((prevState) => ({ ...prevState, background: value }));
  };

  const handleSelectCategory = (event) => {
    setCurrentQuiz((prevState) => ({
      ...prevState,
      quizCategory: event.target.value,
    }));
  };

  const handleQuizChange = (event) => {
    const idInput = event.target.id;
    const value = event.target.value;
    const nameInput = event.target.name;
    if (nameInput === "answer") {
      let answer = {};
      selectAnswers.forEach(
        (item, idx) =>
          idInput === item &&
          (answer = {
            [`answers[${idx}][answer]`]: value,
          })
      );
      return setCurrentQuestion((prevState) => ({
        ...prevState,
        ...answer,
      }));
    }
    nameInput === "quiz" &&
      setCurrentQuiz((prevState) => ({
        ...prevState,
        quizName: value,
      }));
    nameInput === "question" &&
      setCurrentQuestion((prevState) => ({
        ...prevState,
        question: value,
      }));
    nameInput === "categories" &&
      setCurrentQuiz((prevState) => ({
        ...prevState,
        quizCategory: value,
      }));
  };

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <PageWrapper>
      <PageTopBar titlePage="Create quize" />
      <SectionWrapper>
        {isMobile ? (
          <>
            <QuestionCard
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              handleQuizChange={handleQuizChange}
              selectAnswers={selectAnswers}
            />
            <SelectAttributeCard
              changeAttribute={handleRadioChange}
              changeCategory={handleQuizChange}
              categories={allCategories}
              quiz={currentQuiz}
              question={currentQuestion}
            />
            <QuestionsList />
          </>
        ) : (
          <>
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
          </>
        )}
        <QuestionsList />
        <QuestionCard
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          handleQuizChange={handleQuizChange}
          quiz={currentQuiz}
          selectAnswers={selectAnswers}
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
