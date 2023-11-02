import InputDefault from "../../../../shared/components/InputDefault/InputDefault";
import BtnToggleFormAuthS from "../../../../shared/components/Buttons/BtnConfirmAuth/BtnConfirmAuth";
import { PageWrapper, QuizeBox, Title, SubTitle } from "./BaseQuizForm.styled";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../../../redux/user/userSelectors";

const BaseQuizForm = () => {

  const hasToken = useSelector(selectIsAuth);
  console.log(hasToken)

  return (
    <PageWrapper>
      <QuizeBox>
        <Title>Log in to take the quiz</Title>
        <SubTitle>General Science</SubTitle>
        <InputDefault
          style={{ marginBottom: "16px" }}
          placeholder="Name"
          disabled={hasToken}
        />
        <BtnToggleFormAuthS disabled={hasToken}>
          Start
        </BtnToggleFormAuthS>
      </QuizeBox>
    </PageWrapper>
  );
};

export default BaseQuizForm;
