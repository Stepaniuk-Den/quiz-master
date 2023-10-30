//import { useLocation } from "react-router";
import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore";
import { PageWrapper, SectionWrapper } from "./DiscoverPageStyled";
//import QuizeSearch from "../../modules/discoverPage/components/QuizesSearch/QuizesSearch";
// import PageTopBar from "../../shared/PageTopBar/PageTopBar";
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar";
import QuizesList from "../../shared/components/QuizesList/QuizesList";
import QuizeFilterTools from "../../modules/discoverPage/components/QuizFilterTools/QuizFilterTools";

const DiscoverPage = () => {
  //const location = useLocation();
  // console.log("locationDiscovery", location);

  return (
    <PageWrapper>
      <SectionWrapper>
        <PageTopBar titlePage="Discover" />
        {/* <QuizeSearch /> */}
        <QuizeFilterTools/>
        <QuizesList/>
        <BtnLoadMore />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default DiscoverPage;
