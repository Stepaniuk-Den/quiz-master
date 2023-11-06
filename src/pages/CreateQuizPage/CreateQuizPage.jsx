import QuestionsList from "../../modules/createQuizPage/components/QuestionsList/QuestionsList.jsx";
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar.jsx";
// import SelectCustom from "../../shared/components/Select/Select.jsx";
import { PageWrapper, SectionWrapper } from "./CreateQuizPage.styled.js";

const CreateQuizPage = () => {
  return (
    <PageWrapper>
      <PageTopBar titlePage="Create quize" />
      <SectionWrapper>
        <QuestionsList/>
        <div>
          <input type="text" placeholder="Quiz theme" />
          <div>formQuiz</div>
        </div>
        <div>
          <div>
          <p>Audience</p>
          <input type="radio" />
          <input type="radio" />
          </div>
          <div>
          <p>Categories</p>
          <select name="categories" id=""></select>
          </div>
          <div>
          <p>Background</p>
          <div><input type="radio" /></div>
          <div><input type="radio" /></div>
          <div><input type="radio" /></div>
          </div>
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default CreateQuizPage;
