import { ButtonS } from "./BtnLoadMoreStyled";

const BtnLoadMore = () => {
  const handleLoadMore = () => {
    console.log("Clicked Load more");
  }

  return (
    <>
      <ButtonS type="button" onClick={handleLoadMore}>Load more</ButtonS>
    </>
  );
};

export default BtnLoadMore;
