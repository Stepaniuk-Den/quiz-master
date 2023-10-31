import { useDispatch, useSelector } from "react-redux";
import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore"
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar"
import QuizesList from "../../shared/components/QuizesList/QuizesList"
import { selectPassed } from "../../redux/selectors";
import { ContainerLastPassed } from "./LastQuizesPageStyled";
import { getTotalPassedThunk } from "../../redux/quiz/quizThunks";

const LastQuizesPage = () => {
  // const dispatch = useDispatch()
  const passedQuizzes = useSelector(selectPassed);
  // console.log(dispatch(getTotalPassedThunk({page: 1, limit: 8})))
  return (
    <ContainerLastPassed>
      <PageTopBar titlePage="Last passed quizzes" />
      <QuizesList quizzesArr={passedQuizzes} />
      <BtnLoadMore/>
    </ContainerLastPassed>
  )
}

export default LastQuizesPage