
import AnswerCard from "../../modules/quizPage/components/AnswerCard";
import BaseQuizForm from "../../modules/quizPage/components/BaseQuizForm/BaseQuizForm";
import { Container, Image} from "./QuizePage.styled";


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

    <Container>
        {/* <BaseQuizForm />
      <Image /> */}
      <AnswerCard />
    </Container>

  );
};

export default QuizePage;
