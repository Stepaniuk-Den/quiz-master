import BaseQuizForm from "../../modules/quizPage/components/BaseQuizForm/BaseQuizForm";
import GoBackBtn from "../../shared/components/Buttons/GoBackBtn/GoBackBtn";
import { Container} from "./QuizePage.styled";

const QuizePage = () => {
  return (
    <Container>
      <BaseQuizForm />
    </Container>
  );
};

export default QuizePage;
