import CardSingle from "../CardSingle/CardSingle";
import { CardList } from "./CardsAllStyled";

const CardsAll = () => {
  return (
    <>      
      <CardList>
        <CardSingle />
        <CardSingle />
        <CardSingle />        
      </CardList>
    </>
  );
};

export default CardsAll;
