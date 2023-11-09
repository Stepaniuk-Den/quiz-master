import GoBackBtn from "../../shared/components/Buttons/GoBackBtn/GoBackBtn";
import { PageWrapper, BackBox, SplashWrapS } from "./QuizePage.styled";
import { Outlet, useLocation, useParams } from "react-router-dom";
import BaseQuizForm from "../../modules/quizPage/BaseQuizForm";
import QuizResult from "../../modules/quizPage/QuizResult";
import AnswerList from "../../modules/quizPage/AnswerList";
import QuizFeedback from "../../modules/quizPage/QuizFeedback";
import AfterTestFeedback from "../../modules/quizPage/AfterTestFeedback/AfterTestFeedback";

const QuizePage = () => {
  const { quizId } = useParams();
  const { category } = useParams();

  return (
    <>
        <BackBox>
          <GoBackBtn to="/" />
        </BackBox>
      <PageWrapper>
        <SplashWrapS>
          <Outlet>
            <BaseQuizForm quizId={quizId} category={category} />
            <AnswerList quizId={quizId} />
            <QuizResult quizId={quizId} />
            <QuizFeedback quizId={quizId} />
            <AfterTestFeedback />
          </Outlet>
        </SplashWrapS>
      </PageWrapper>
    </>
  );
};

export default QuizePage;
