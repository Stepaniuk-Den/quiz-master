import { BiPlusS, BtnTitle, ButtonS, IconWrapper } from "./BtnCreateQuizStyled";

const BtnCreateQuiz = () => {
  return (
    <>
      <ButtonS type="button">
        <IconWrapper>
            <BiPlusS/>
        </IconWrapper>
        <BtnTitle>Create quiz</BtnTitle>
      </ButtonS>
    </>
  );
};

export default BtnCreateQuiz;
