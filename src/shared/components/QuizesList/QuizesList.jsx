//import { v4 as uuidv4 } from 'uuid';
import QuizListItem from "../QuizListItem/QuizListItem";
import { CardList } from "./QuizesListStyled";

const QuizesList = ({quizzesArr, className}) => {
    
  return (
    <>      
      <CardList className={className}>
        {/* <QuizListItem/>
        <QuizListItem/>
        <QuizListItem/> */}
        {quizzesArr?.length > 0 && quizzesArr.map(quiz=><li key={quiz._id}><QuizListItem quiz={quiz}/></li>)}        
      </CardList>
    </>
  );
};

export default QuizesList;
