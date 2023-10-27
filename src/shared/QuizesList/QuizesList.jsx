import QuizListItem from "../QuizListItem/QuizListItem";
import { CardList } from "./QuizesListStyled";

const QuizesList = () => {
  return (
    <>      
      <CardList>
        <QuizListItem />
        <QuizListItem />
        <QuizListItem />        
      </CardList>
    </>
  );
};

export default QuizesList;
