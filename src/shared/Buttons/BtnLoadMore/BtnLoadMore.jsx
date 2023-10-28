import { ButtonS } from "./BtnLoadMoreStyled";

const BtnLoadMore = ({text}) => {
  return (
    <>
      <ButtonS type="button" onClick={handleLoadMore}>{text}</ButtonS>
    </>
  );
};

export default BtnLoadMore;
