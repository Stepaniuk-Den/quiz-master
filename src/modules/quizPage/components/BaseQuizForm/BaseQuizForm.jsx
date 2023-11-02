import InputDefault from "../../../../shared/components/InputDefault/InputDefault";
import BtnToggleFormAuthS from "../../../../shared/components/Buttons/BtnConfirmAuth/BtnConfirmAuth";
import { PageWrapper, QuizeBox, Title, SubTitle } from "./BaseQuizForm.styled";

const BaseQuizForm = () => {

  return (
    <PageWrapper>
      <QuizeBox>
        <Title>Log in to take the quiz</Title>
        <SubTitle>General Science</SubTitle>
        <InputDefault style={{ marginBottom: "16px" }} placeholder="Name" />
        <BtnToggleFormAuthS>Start</BtnToggleFormAuthS>
      </QuizeBox>
    </PageWrapper>
  );
};

export default BaseQuizForm;
