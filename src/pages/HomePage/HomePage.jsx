import ButtonSeeAll from "../../shared/components/Buttons/ButtonSeeAll";
import UserStats from "../../modules/homepage/components/UserStats"
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar";
import QuizesList from "../../shared/components/QuizesList/QuizesList";
import { BoxLastPassed, BoxUserStats, TitleLastPassedQ } from "./HomePageStyled";
import { selectPassed } from "../../redux/selectors";
import { useSelector } from "react-redux";

const HomePage = () => {
  const seeAllLink = "/lastquiz"; 
  const passedQuizzes = useSelector(selectPassed);
  
 const shouldDisplaySeeAll = passedQuizzes.length < 3;
const displayedQuizNames = passedQuizzes.slice(0, 3);

  return (
    <>
      <PageTopBar titlePage="Home"/>
      
      <BoxUserStats>
        <UserStats />
        <div><BoxLastPassed>
          <TitleLastPassedQ>Last passed quizzes</TitleLastPassedQ>
          {shouldDisplaySeeAll ? null : <ButtonSeeAll to={seeAllLink} />}
        </BoxLastPassed>
          <QuizesList quizzesArr={displayedQuizNames} /></div>
      </BoxUserStats>
      </>
  )
}

export default HomePage;