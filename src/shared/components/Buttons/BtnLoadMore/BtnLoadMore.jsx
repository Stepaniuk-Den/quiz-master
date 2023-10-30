import { ButtonS } from "./BtnLoadMoreStyled";

const BtnLoadMore = ({children}) => {
  
  const handleLoadMore = () => {
console.log("BtnLoadMore");
  }

  return (
    <>
      <ButtonS type="button" onClick={handleLoadMore}>{children}</ButtonS>
    </>
  );
};

export default BtnLoadMore;
