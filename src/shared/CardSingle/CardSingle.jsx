import { useLocation } from "react-router";
import BtnStart from "../../shared/Buttons/BtnStart";
import {
  CardWrapper,
  FiHeartS,
  FiUsersS,
  GeneralScienceS,
  IconUsersWrapper,  
  RatingStars,
  TextRatingWrapper,
  TextWrapper,
  ThemesS,
  TopIconBox,
  UsersNumber,
} from "./CardSingleStyled";

const CardSingle = () => {
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

export default CardSingle;
