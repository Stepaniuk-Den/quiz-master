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

const CreateQuizPage = () => {
  const [audience, setAudience] = useState("adults");
  const [color, setColor] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const allCategories = useSelector(selectDiscoverAllCategories);
  const dispatch = useDispatch();
  const location = useLocation();
  // console.log('location: ', location.state.data);//id quiz
  const [currentQuestion, setCurrentQuestion] = useState({
    theme: "",
    time: null,
    question: "",
    quizType: "quizq",
    // answers: [{
    //   answer: null,
    //   correctAnswer: boolean,
    // }],
  });
console.log(currentQuestion)
  useEffect(() => {
    if (allCategories) return;
    dispatch(getQuizCategoriesThunk());
  }, [dispatch, allCategories]);

  const handleRadioChange = (event) => {
    const value = event.target.id;

    if (value === "children" || value === "adults") {
      // setCategoryName("");
      setAudience(value);
    }
    setColor(value);
  };

  const handleSelectCategory = (event) => {
    setCategoryName(event.target.value);
  };

  const handleQuizChange = (evt, field) => {
    setCurrentQuestion((prevState) => ({
      ...prevState,
      [field]: evt.target.value,
    }));
  };
  return (
    <PageWrapper>
      <PageTopBar titlePage="Create quize" />
      <SectionWrapper>
        <QuestionsList />
        <QuestionCard
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          handleQuizChange={handleQuizChange}
        />
        <SelectAttributeCard
          audience={audience}
          changeAttribute={handleRadioChange}
          changeCategory={handleSelectCategory}
          color={color}
          categories={allCategories}
          categoryName={categoryName}
        />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default CreateQuizPage;
