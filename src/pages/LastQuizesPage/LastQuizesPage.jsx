import { useSelector } from "react-redux";
import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore"
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar"
import QuizesList from "../../shared/components/QuizesList/QuizesList"
import { selectPassed } from "../../redux/selectors";

const LastQuizesPage = () => {
    const passedQuizzes = useSelector(selectPassed);
  return (
    <div>
      <PageTopBar titlePage="Last passed quizzes" />
      <QuizesList quizzesArr={passedQuizzes} />
      <BtnLoadMore/>
    </div>
  )
}

export default LastQuizesPage