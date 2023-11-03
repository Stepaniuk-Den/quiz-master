//import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import QuizListItem from "../QuizListItem/QuizListItem";
import { CardList } from "./QuizesListStyled";

const QuizesList = ({quizzesArr, className}) => {
  // console.log('quizzesArrList: ', quizzesArr);  
  return (
    <>      
      <CardList className={className}>
        {quizzesArr?.length > 0 && quizzesArr.map(quiz =>
          <li key={quiz._id}>
          <Link to={`/quiz/${quiz._id}`}>
                <QuizListItem quiz={quiz} />
            </Link>
          </li>)}        
      </CardList>
    </>
  );
};

export default QuizesList;
