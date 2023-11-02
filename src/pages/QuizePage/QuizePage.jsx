import AnswerCard from "../../modules/quizPage/components/AnswerCard";
import BaseQuizForm from "../../modules/quizPage/components/BaseQuizForm/BaseQuizForm";
import { Container, Image} from "./QuizePage.styled";

const QuizePage = () => {
  return (
    <Container>
        {/* <BaseQuizForm />
      <Image /> */}
      <AnswerCard />
    </Container>
  );
};

export default QuizePage;
