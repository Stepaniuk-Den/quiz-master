import ButtonSeeAll from "../../modules/homepage/components/ButtonSeeAll";
import UserStats from "../../modules/homepage/components/UserStats"
import PageTopBar from "../../shared/PageTopBar/PageTopBar";
import QuizesList from "../../shared/QuizesList/QuizesList";
import { BoxLastPassed, BoxUserStats, TitleLastPassedQ } from "./HomePageStyled";
// import { quizNames } from "../../shared/QuizesList/quizNames";

const HomePage = () => {
  const seeAllLink = "/lastquiz"; 
  // const shouldDisplaySeeAll = quizNames.length > 3;
  // const displayedQuizNames = quizNames.slice(0, 3);
  //  {shouldDisplaySeeAll && <ButtonSeeAll to={seeAllLink} />}
  //  <QuizesList quizCategoriesNameArr={displayedQuizNames} />

  return (
    <>
      <PageTopBar titlePage="Home"/>
      
      <BoxUserStats>
        <UserStats />
        <div><BoxLastPassed>
          <TitleLastPassedQ>Last passed quizzes</TitleLastPassedQ>
          <ButtonSeeAll to={seeAllLink} />
        </BoxLastPassed>
          <QuizesList /></div>
      </BoxUserStats>
      </>
  )
}

export default HomePage;