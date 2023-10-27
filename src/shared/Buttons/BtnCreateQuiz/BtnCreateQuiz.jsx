import { BiPlusS, BtnTitle, ButtonS, IconWrapper } from "./BtnCreateQuizStyled";

const BtnCreateQuiz = () => {
  const handleCreateQuiz = () =>{
    console.log("Clicked Create quiz");
  }
  return (
    <>
      <ButtonS type="button" onClick={handleCreateQuiz}>
        <IconWrapper>
            <BiPlusS/>
        </IconWrapper>
        <BtnTitle>Create quiz</BtnTitle>
      </ButtonS>
    </>
  );
};

export default BtnCreateQuiz;
