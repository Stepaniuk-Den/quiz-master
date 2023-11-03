import PageTopBar from "../../shared/components/PageTopBar/PageTopBar.jsx";
import { PageWrapper, SectionWrapper } from "./CreateQuizPage.styled.js";

const CreateQuizPage = () => {
  return (
    <PageWrapper>
      <PageTopBar titlePage="Create quize" />
      <SectionWrapper>
        <div>
          <p>Questions</p>
          <ul>
            <li>quiz</li>
          </ul>
          <select name="create" id="">
            create
          </select>
        </div>
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
        </div>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default CreateQuizPage;
