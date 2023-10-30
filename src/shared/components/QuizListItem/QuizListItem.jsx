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
  const { categoryName, quizName, rate, totalPassed } = quiz;
  const location = useLocation();

  const newClassName = location.pathname === "/favorite" ? "favorite" : "";
  return (
    <>
      <CardWrapper>
        <TopIconBox>
          <IconUsersWrapper>
            <FiUsersS />
            {/* <UsersNumber>485</UsersNumber> */}
            <UsersNumber>{totalPassed}</UsersNumber>
          </IconUsersWrapper>
          <FiHeartS className={newClassName} />
        </TopIconBox>
        <TextRatingWrapper>
          <TextWrapper>
            {/* <ThemesS>Themes</ThemesS> */}
            <ThemesS>{categoryName}</ThemesS>
            {/* <GeneralScienceS>General Science</GeneralScienceS> */}
            <GeneralScienceS>{quizName}</GeneralScienceS>
          </TextWrapper>
          {/* <RatingStars>*****</RatingStars> */}          
          <RatingStars rate={rate}/>
        </TextRatingWrapper>
        <BtnStart />
      </CardWrapper>
    </>
  );
};

export default QuizListItem;
