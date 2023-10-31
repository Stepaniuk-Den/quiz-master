import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore";
import { PageWrapper, SectionWrapper } from "./DiscoverPageStyled";
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar";
import QuizesList from "../../shared/components/QuizesList/QuizesList";
import QuizeFilterTools from "../../modules/discoverPage/components/QuizFilterTools/QuizFilterTools";
import { useSelector } from "react-redux";
import { selectDiscoverAdult } from "../../redux/selectors";

const DiscoverPage = () => {
  const allAdultCategories = useSelector(selectDiscoverAdult)
  console.log('allAdultCategories: ', allAdultCategories);

  return (
    <PageWrapper>
      <SectionWrapper>
        <PageTopBar titlePage="Discover" />        
        <QuizeFilterTools/>
        <QuizesList/>
        <BtnLoadMore />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default DiscoverPage;
