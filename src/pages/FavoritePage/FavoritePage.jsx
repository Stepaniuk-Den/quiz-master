import { useLocation } from "react-router";
import BtnCreateQuiz from "../../shared/Buttons/BtnCreateQuiz/BtnCreateQuiz";
import CardsAll from "../../shared/CardsAll/CardsAll";
import BtnLoadMore from "../../shared/Buttons/BtnLoadMore/BtnLoadMore";
import FormFiltersFavorite from "./FavoritePageComponents/FormFiltersFavorite/FormFiltersFavorite";
import { PageWrapper, SectionWrapper, TitleIconBox, TitleS } from "./FavoritePageStyled";


const FavoritePage = () => {
  const location = useLocation();
  // console.log("locationFavorite", location);

  return (
    <PageWrapper>
      <SectionWrapper>
        <TitleIconBox>
          <TitleS>Favorite quize</TitleS>
          <BtnCreateQuiz />
        </TitleIconBox>
        <FormFiltersFavorite />
        <CardsAll location={location}/>
        <BtnLoadMore />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default FavoritePage;
