import BtnLoadMore from "../../shared/Buttons/BtnLoadMore/BtnLoadMore"
import PageTopBar from "../../shared/PageTopBar/PageTopBar"
import QuizesList from "../../shared/QuizesList/QuizesList"
import { quizNames } from "../../shared/QuizesList/quizNames"

const LastQuizesPage = () => {
  return (
    <div>
      <PageTopBar titlePage="Last passed quizzes" />
      <QuizesList quizCategoriesNameArr={quizNames} />
      <BtnLoadMore/>
    </div>
  )
}

export default LastQuizesPage