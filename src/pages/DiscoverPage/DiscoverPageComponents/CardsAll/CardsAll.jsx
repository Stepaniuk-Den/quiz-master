import CardSingle from "../CardSingle";
import { CardList } from "./CardsAllStyled";

const CardsAll = () => {
  return (
    <>
      <div>CardsAll</div>
      <CardList>
        <CardSingle />
        <CardSingle />
        <CardSingle />        
      </CardList>
    </>
  );
};

export default CardsAll;
