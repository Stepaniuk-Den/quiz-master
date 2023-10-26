import { BtnStartS } from "./BtnStartStyled";

const BtnStart = () => {
const handleBtnStart = () => {
    console.log("BtnStart clicked!");
}

  return (
    <>
      <BtnStartS type="button" onClick={handleBtnStart}>
        Start
      </BtnStartS>
    </>
  );
};

export default BtnStart;
