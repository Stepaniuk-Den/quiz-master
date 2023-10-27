import { useLocation } from "react-router";
import { CardWrapper, FiHeartS, FiUsersS, GeneralScienceS, IconUsersWrapper, RatingStars, TextRatingWrapper, TextWrapper, ThemesS, TopIconBox, UsersNumber } from "./QuizListItemStyled";
import BtnStart from "../Buttons/BtnStart";

const QuizListItem = () => {
  const location = useLocation()
  
  const newClassName = location.pathname === '/favorite'?"favorite": '';
  return (
    <>
      <CardWrapper>
        <TopIconBox>
          <IconUsersWrapper>
            <FiUsersS />
            <UsersNumber>485</UsersNumber>
          </IconUsersWrapper>
          <FiHeartS className={newClassName}/>
        </TopIconBox>
        <TextRatingWrapper>
          <TextWrapper>
            <ThemesS>Themes</ThemesS>
            <GeneralScienceS>General Science</GeneralScienceS>
          </TextWrapper>
          <RatingStars>*****</RatingStars>
        </TextRatingWrapper>
        <BtnStart />
      </CardWrapper>
    </>
  );
};

export default QuizListItem;
