import {
  CardWrapper,  
  FiUsersS,
  GeneralScienceS,
  IconUsersWrapper,  
  TextRatingWrapper,
  TextWrapper,
  ThemesS,
  TopIconBox,
  UsersNumber,
} from "./QuizListItemStyled";
import BtnStart from "../Buttons/BtnStart";
import RatingStars from "../RatingStars/RatingStars";
import BtnHeart from "../Buttons/BtnHeart/BtnHeart";

const QuizListItem = ({ quiz, updateFavoriteQuizes }) => {
  const { _id, quizCategory, quizName, rate, totalPassed, isFavorite, correctAnswers,
    quantityQuestions
  } = quiz;



  return (
    <>
      <CardWrapper>
        <TopIconBox>
          <IconUsersWrapper>
            <FiUsersS />            
            <UsersNumber>{totalPassed}</UsersNumber>
          </IconUsersWrapper>          
          <BtnHeart id={_id} isFavorite={isFavorite} updateFavoriteQuizes={updateFavoriteQuizes}/>
        </TopIconBox>
        <TextRatingWrapper>
          <TextWrapper>            
            <ThemesS>{quizCategory?.categoryName}</ThemesS>            
            <GeneralScienceS>{quizName}</GeneralScienceS>
          </TextWrapper>            
          <RatingStars rate={rate}/>
        </TextRatingWrapper>
        <BtnStart id={quiz._id} category={quizCategory.categoryName} correctAnswers={correctAnswers} quantityQuestions={quantityQuestions} />
      </CardWrapper>
    </>
  );
};

export default QuizListItem;
