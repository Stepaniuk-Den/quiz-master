//import { v4 as uuidv4 } from 'uuid';
import QuizListItem from "../QuizListItem/QuizListItem";
import { CardList } from "./QuizesListStyled";

const QuizesList = ({quizzesArr, type}) => {
  
  return (
    <>      
      <CardList>
        {/* <QuizListItem/>
        <QuizListItem/>
        <QuizListItem/> */}
        {quizzesArr.map(quiz=><li><QuizListItem key={quiz._id} quiz={quiz} type={type}/></li>)}        
      </CardList>
    </>
  );
};

export default QuizesList;
