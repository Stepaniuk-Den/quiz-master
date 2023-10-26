import BtnCreateQuiz from "../../shared/Buttons/BtnCreateQuiz/BtnCreateQuiz";
import BtnLoadMore from "../../shared/Buttons/BtnLoadMore/BtnLoadMore";
import CardsAll from "../../shared/CardsAll/CardsAll";
import FormFilters from "./DiscoverPageComponents/FormFilters/FormFilters";
// import BtnCreateQuiz from "../../shared/Buttons/BtnCreateQuiz/BtnCreateQuiz";
import {
  PageWrapper,
  SectionWrapper,
  TitleIconBox,
  TitleS,
} from "./DiscoverPageStyled";

const DiscoverPage = () => {
  return (
    <PageWrapper>
      <SectionWrapper>
        <TitleIconBox>
          <TitleS>Discover</TitleS>
          <BtnCreateQuiz/> 
        </TitleIconBox>        
        <FormFilters/>
        <CardsAll/>
        <BtnLoadMore/>        
      </SectionWrapper>
    </PageWrapper>
  );
};

export default DiscoverPage;
