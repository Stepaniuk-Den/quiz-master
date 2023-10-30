import CardSingle from "../CardSingle/CardSingle";
import { CardList } from "./CardsAllStyled";

const CardsAll = ({ array, type }) => {
  return (
    <>
      <CardList>
        {array.map((quiz) => {
          return <CardSingle quizData={quiz} key={quiz._id} type={type}/>;
        })}
      </CardList>
    </>
  );
};

export default CardsAll;
