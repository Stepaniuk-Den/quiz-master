import { useDispatch } from "react-redux";
import QuizQuestion from "../../modules/quizPage/QuizQuestion/QuizQuestion";
import GoBackBtn from "../../shared/components/Buttons/GoBackBtn/GoBackBtn";
import { PageWrapper, QuizeBox, BackBox } from "./QuizePage.styled";

import { useParams } from "react-router-dom";
import { getQuizThunk } from "../../redux/quiz/quizThunks";
import { useEffect, useState } from "react";

const QuizePage = () => {
  const { quizId } = useParams();
  const dispatch = useDispatch();
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    dispatch(getQuizThunk(quizId)).then((data) => {
      setQuizData(data.payload);
    });
  }, [dispatch, quizId]);
  return (
    <>
      <BackBox>
        <GoBackBtn to="/" />
      </BackBox>
      <PageWrapper>
        <QuizeBox>
          {quizData.length > 0 && <QuizQuestion questions={quizData} quizId={quizId} />}
        </QuizeBox>
      </PageWrapper>
    </>
  );
};

export default QuizePage;