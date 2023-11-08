import { useState } from "react";
import QuestionCard from "../../modules/createQuizPage/components/QuestionCard/QuestionCard.jsx";
import QuestionsList from "../../modules/createQuizPage/components/QuestionsList/QuestionsList.jsx";
import SelectAttributeCard from "../../modules/createQuizPage/components/SelectAttributeCard/SelectAttributeCard.jsx";
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar.jsx";
import { PageWrapper, SectionWrapper } from "./CreateQuizPage.styled.js";

const CreateQuizPage = () => {
  const [audience, setAudience] = useState("adults");
  const [color, setColor] = useState(null);
  const [categoryName, setCategoryName] = useState(null);

  const handleRadioChange = (event) => {
    const value = event.target.id;
    console.log("event.target.id: ", event.target.id);
    value === "children" || value === "adults"
      ? setAudience(value)
      : setColor(value);
  };

  const handleSelectCategory = (event) => {
    setCategoryName(event.target.value);
    console.log("event.target.value: ", event.target.value);
  };

  return (
    <PageWrapper>
      <PageTopBar titlePage="Create quize" />
      <SectionWrapper>
        <QuestionsList />
        <QuestionCard />
        <SelectAttributeCard
          audience={audience}
          changeAttribute={handleRadioChange}
          changeCategory={handleSelectCategory}
          color={color}
        />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default CreateQuizPage;
