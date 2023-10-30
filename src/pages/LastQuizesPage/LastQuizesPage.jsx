import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore"
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar"
import QuizesList from "../../shared/components/QuizesList/QuizesList"
import { quizNames } from "../../shared/components/QuizesList/quizNames"

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