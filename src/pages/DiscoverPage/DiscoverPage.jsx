//import { useLocation } from "react-router";
import BtnCreateQuiz from "../../shared/Buttons/BtnCreateQuiz/BtnCreateQuiz";
import BtnLoadMore from "../../shared/Buttons/BtnLoadMore/BtnLoadMore";
import CardsAll from "../../shared/CardsAll/CardsAll";
import {
  PageWrapper,
  SectionWrapper,
  TitleIconBox,
  TitleS,
} from "./DiscoverPageStyled";
import FormFiltersDiscovery from "./DiscoverPageComponents/FormFiltersDiscovery/FormFiltersDiscovery";

const DiscoverPage = () => {
  //const location = useLocation();
  // console.log("locationDiscovery", location);

  return (
    <PageWrapper>
      <SectionWrapper>
        <TitleIconBox>
          <TitleS>Discover</TitleS>
          <BtnCreateQuiz />
        </TitleIconBox>
        <FormFiltersDiscovery />
        <CardsAll />
        <BtnLoadMore />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default DiscoverPage;
