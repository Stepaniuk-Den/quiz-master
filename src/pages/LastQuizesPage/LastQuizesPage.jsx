import { useSelector } from "react-redux";
import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore"
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar"
import QuizesList from "../../shared/components/QuizesList/QuizesList"
import { selectPassed } from "../../redux/selectors";
import { ContainerLastPassed } from "./LastQuizesPageStyled";

const LastQuizesPage = () => {
    const passedQuizzes = useSelector(selectPassed);
  return (
    <ContainerLastPassed>
      <PageTopBar titlePage="Last passed quizzes" />
      <QuizesList quizzesArr={passedQuizzes} />
      <BtnLoadMore/>
    </ContainerLastPassed>
  )
}

export default LastQuizesPage