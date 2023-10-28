//import { v4 as uuidv4 } from 'uuid';
import QuizListItem from "../QuizListItem/QuizListItem";
import { CardList } from "./QuizesListStyled";

const QuizesList = ({quizCategoriesNameArr}) => {
  
  return (
    <>      
      <CardList>
        <QuizListItem/>
        <QuizListItem/>
        <QuizListItem/>
        {/* {quizCategoriesNameArr.map(quizCategoryName=><QuizListItem key={uuidv4()}/>)}         */}
      </CardList>
    </>
  );
};

export default QuizesList;
