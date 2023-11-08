import GoBackBtn from "../../shared/components/Buttons/GoBackBtn/GoBackBtn";
import { PageWrapper, BackBox } from "./QuizePage.styled";
import { Outlet, useParams } from "react-router-dom";
import BaseQuizForm from "../../modules/quizPage/BaseQuizForm";
import QuizResult from "../../modules/quizPage/QuizResult";
import FeedbackPage from "../FeedbackPage/FeedbackPage";
import AnswerList from "../../modules/quizPage/AnswerList";

const QuizePage = () => {
  const { quizId } = useParams();
  const { category } = useParams();

  return (
    <>
      <BackBox>
        <GoBackBtn to="/" />
      </BackBox>
      <PageWrapper>
        <Outlet>
          <BaseQuizForm quizId={quizId} category={category} />
          <AnswerList quizId={quizId} />
          <QuizResult quizId={quizId} />
          <FeedbackPage quizId={quizId} />
        </Outlet>
      </PageWrapper>
    </>
  );
};

export default QuizePage;
