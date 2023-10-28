//import { useLocation } from "react-router";
import BtnLoadMore from "../../shared/Buttons/BtnLoadMore/BtnLoadMore";
import { PageWrapper, SectionWrapper } from "./FavoritePageStyled";
import PageTopBar from "../../shared/PageTopBar/PageTopBar";
import QuizesList from "../../shared/QuizesList/QuizesList";
import QuizeFilterTools from "../../modules/favoritePage/components/QuizFilterTools/QuizFilterTools";




const FavoritePage = () => {
  //const location = useLocation();
  // console.log("locationFavorite", location);

  return (
    <PageWrapper>
      <SectionWrapper>        
        <PageTopBar titlePage='Favorite quize'/>        
        <QuizeFilterTools/>
        <QuizesList/>
        <BtnLoadMore />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default FavoritePage;
