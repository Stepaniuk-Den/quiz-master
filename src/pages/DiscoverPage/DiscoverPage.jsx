import BtnCreateQuiz from "../../components/Buttons/BtnCreateQuiz/BtnCreateQuiz";
import BtnLoadMore from "../../components/Buttons/BtnLoadMore/BtnLoadMore";
import CardsAll from "./DiscoverPageComponents/CardsAll/CardsAll";
import FormFilters from "./DiscoverPageComponents/FormFilters/FormFilters";
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
          <BtnCreateQuiz />
        </TitleIconBox>        
        <FormFilters/>
        <CardsAll/>
        <BtnLoadMore/>        
      </SectionWrapper>
    </PageWrapper>
  );
};

export default DiscoverPage;
