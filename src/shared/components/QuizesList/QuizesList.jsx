import { useLocation } from "react-router-dom";
import QuizListItem from "../QuizListItem/QuizListItem";
import { CardList } from "./QuizesListStyled";
import CreateQuizCard from "../../../modules/randomQuizPage/components/CreateQuizCard/CreateQuizCard";

const QuizesList = ({ quizzesArr, className, updateFavoriteQuizes }) => {
  const location = useLocation();

  const randomQuizzes =
    location.pathname === "/randomquiz/Adults" ||
    location.pathname === "/randomquiz/Children";
  return (
    <>
      <CardList className={className}>
        {randomQuizzes && <CreateQuizCard />}
        {quizzesArr?.length > 0 &&
          quizzesArr.map((quiz) => (
            <li key={quiz._id}>
              <QuizListItem
                key={quiz._id}
                quiz={quiz}
                updateFavoriteQuizes={updateFavoriteQuizes}
              />
            </li>
          ))}
      </CardList>
    </>
  );
};

export default QuizesList;
