import BtnStart from "../../shared/Buttons/BtnStart";
import {
  CardWrapper,
  FiHeartS,
  FiUsersS,
  GeneralScienceS,
  IconUsersWrapper,
  RatingS,
  TextRatingWrapper,
  TextWrapper,
  ThemesS,
  TopIconBox,
  UsersNumber,
} from "./CardSingleStyled";

const CardSingle = () => {
  return (
    <>
      <CardWrapper>
        <TopIconBox>
          <IconUsersWrapper>
            <FiUsersS />
            <UsersNumber>485</UsersNumber>
          </IconUsersWrapper>
          <FiHeartS />
        </TopIconBox>
        <TextRatingWrapper>
          <TextWrapper>
            <ThemesS>Themes</ThemesS>
            <GeneralScienceS>General Science</GeneralScienceS>
          </TextWrapper>
          <RatingS>*****</RatingS>
        </TextRatingWrapper>
        <BtnStart />
      </CardWrapper>
    </>
  );
};

export default CardSingle;
