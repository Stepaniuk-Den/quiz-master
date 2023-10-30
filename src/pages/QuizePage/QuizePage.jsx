import GoBackBtn from "../../shared/Buttons/GoBackBtn/GoBackBtn"
import { PageWrapper, QuizeBox } from "./QuizePage.styled"

const QuizePage = () => {
  return (
    <PageWrapper>
      <QuizeBox>QuizePage</QuizeBox>
      <GoBackBtn to="/"/>
    </PageWrapper>
  )
}

export default QuizePage