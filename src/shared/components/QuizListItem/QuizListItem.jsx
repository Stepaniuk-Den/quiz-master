import { useLocation } from "react-router";
import {
  CardWrapper,
  FiHeartS,
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

const QuizListItem = ({ quiz }) => {
  const { quizCategory, quizName, rate, totalPassed } = quiz;
  const location = useLocation();

  const newClassName = location.pathname === "/favorite" ? "favorite" : "";
  return (
    <>
      <CardWrapper>
        <TopIconBox>
          <IconUsersWrapper>
            <FiUsersS />            
            <UsersNumber>{totalPassed}</UsersNumber>
          </IconUsersWrapper>
          <FiHeartS className={newClassName} />
        </TopIconBox>
        <TextRatingWrapper>
          <TextWrapper>            
            <ThemesS>{quizCategory.categoryName}</ThemesS>            
            <GeneralScienceS>{quizName}</GeneralScienceS>
          </TextWrapper>            
          <RatingStars rate={rate}/>
        </TextRatingWrapper>
        <BtnStart />
      </CardWrapper>
    </>
  );
};

export default QuizListItem;
