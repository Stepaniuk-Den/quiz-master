import QuestionCard from "../../modules/createQuizPage/components/QuestionCard/QuestionCard.jsx";
import QuestionsList from "../../modules/createQuizPage/components/QuestionsList/QuestionsList.jsx";
import SelectAttributeCard from "../../modules/createQuizPage/components/SelectAttributeCard/SelectAttributeCard.jsx";
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar.jsx";
import { PageWrapper, SectionWrapper } from "./CreateQuizPage.styled.js";

const CreateQuizPage = () => {
  return (
    <PageWrapper>
      <PageTopBar titlePage="Create quize" />
      <SectionWrapper>
        <QuestionsList/>
        <QuestionCard/>
        <SelectAttributeCard/>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default CreateQuizPage;
