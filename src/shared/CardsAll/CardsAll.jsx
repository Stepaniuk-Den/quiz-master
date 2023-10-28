import CardSingle from "../CardSingle/CardSingle";
import { CardList } from "./CardsAllStyled";

const CardsAll = ({array}) => {
  return (
    <>      
      <CardList>
            {/* {array.map((quiz) => {
            return <CardSingle />;
          })} */}
        <CardSingle />
        <CardSingle />
        <CardSingle />   
        <CardSingle />        
      </CardList>
    </>
  );
};

export default CardsAll;
