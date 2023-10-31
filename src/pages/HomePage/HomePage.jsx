import ButtonSeeAll from "../../shared/components/Buttons/ButtonSeeAll";
import UserStats from "../../modules/homepage/components/UserStats"
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar";
import QuizesList from "../../shared/components/QuizesList/QuizesList";
import { BoxLastPassed, BoxUserStats, TitleLastPassedQ, Container } from "./HomePageStyled";
import { selectPassed } from "../../redux/selectors";
import { useSelector } from "react-redux";
import MediaQuery from "react-responsive";

const HomePage = () => {
  const seeAllLink = "/lastquiz"; 
  const passedQuizzes = useSelector(selectPassed);
  
 const shouldDisplaySeeAll = passedQuizzes.length < 3;

  return (
    <Container>
      <PageTopBar titlePage="Home"/>
      
      <BoxUserStats>
        <UserStats />
        <div>
          <BoxLastPassed>
          <TitleLastPassedQ>Last passed quizzes</TitleLastPassedQ>
          {shouldDisplaySeeAll ? null : <ButtonSeeAll to={seeAllLink} />}
        </BoxLastPassed>
          <MediaQuery minWidth={1440}>
            {matches => (
              <QuizesList quizzesArr={matches ? passedQuizzes.slice(0, 3) : passedQuizzes.slice(0, 2)} />
            )}
          </MediaQuery>
          </div>
      </BoxUserStats>
      </Container>
  )
}

export default HomePage;