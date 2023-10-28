import { ButtonS } from "./BtnLoadMoreStyled";

const BtnLoadMore = ({text}) => {
  
  const handleLoadMore = () => {
console.log("BtnLoadMore");
  }

  return (
    <>
      <ButtonS type="button" onClick={handleLoadMore}>{text}</ButtonS>
    </>
  );
};

export default BtnLoadMore;
