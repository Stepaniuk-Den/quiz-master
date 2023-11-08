import {
  CardWrapper,
  FiUsersS,
  GeneralScienceS,
  IconUsersWrapper,
  IconsBox,
  TextRatingWrapper,
  TextWrapper,
  ThemesS,
  TopIconBox,
  UsersNumber,
} from "./QuizListItemStyled";
import BtnStart from "../Buttons/BtnStart";
import RatingStars from "../RatingStars/RatingStars";
import BtnHeart from "../Buttons/BtnHeart/BtnHeart";
import BtnEditQuiz from "../Buttons/BtnEditQuiz/BtnEditQuiz";
import { useLocation } from "react-router-dom";

const QuizListItem = ({ quiz, updateFavoriteQuizes }) => {
  const {
    _id,
    quizCategory,
    quizName,
    rate,
    totalPassed,
    isFavorite,
    correctAnswers,
    quantityQuestions,
  } = quiz;

  const location = useLocation();
  const isPageMyQuiz = location.pathname === "/ownquiz";

  return (
    <>
      <CardWrapper>
        <TopIconBox>
          <IconUsersWrapper>
            <FiUsersS />
            <UsersNumber>{totalPassed}</UsersNumber>
          </IconUsersWrapper>
          <IconsBox>
            <BtnHeart
              id={_id}
              isFavorite={isFavorite}
              updateFavoriteQuizes={updateFavoriteQuizes}
            />
            {isPageMyQuiz && <BtnEditQuiz id={quiz._id} />}
          </IconsBox>
        </TopIconBox>
        <TextRatingWrapper>
          <TextWrapper>
            <ThemesS>{quizCategory?.categoryName}</ThemesS>
            <GeneralScienceS>{quizName}</GeneralScienceS>
          </TextWrapper>
          <RatingStars rate={rate} />
        </TextRatingWrapper>
        <BtnStart
          id={quiz._id}
          category={quizCategory.categoryName}
          correctAnswers={correctAnswers}
          quantityQuestions={quantityQuestions}
        />
      </CardWrapper>
    </>
  );
};

export default QuizListItem;
