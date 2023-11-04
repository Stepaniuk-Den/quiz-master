import { useDispatch } from "react-redux";
import QuizQuestion from "../../modules/quizPage/QuizQuestion/QuizQuestion";
import GoBackBtn from "../../shared/components/Buttons/GoBackBtn/GoBackBtn"
import { PageWrapper, QuizeBox } from "./QuizePage.styled"

import { useParams } from "react-router-dom";
import { getQuizThunk } from "../../redux/quiz/quizThunks";
import { useEffect, useState } from "react";

const QuizePage = () => {
  const { quizId } = useParams();
  const dispatch = useDispatch();
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    dispatch(getQuizThunk(quizId))
      .then((data) => {
        setQuizData(data.payload);
      });
  }, [dispatch, quizId]);

  return (
    <PageWrapper>
      <GoBackBtn to="/" />
      <QuizeBox>
        {quizData.length > 0 && <QuizQuestion questions={quizData} />}
        </QuizeBox>
    </PageWrapper>
  );
};

export default QuizePage;
