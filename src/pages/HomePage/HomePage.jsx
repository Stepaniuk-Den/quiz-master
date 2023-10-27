import ButtonSeeAll from "../../components/ButtonSeeAll";
import UserStats from "../../components/UserStats"
import BtnCreateQuiz from "../../shared/Buttons/BtnCreateQuiz/BtnCreateQuiz";
import CardsAll from "../../shared/CardsAll/CardsAll";
import HeaderHome from "../../shared/HeaderHome";
import { Box, BoxLastPassed, BoxUserStats, TitleHome, TitleLastPassedQ } from "./HomePageStyled";


const HomePage = () => {
  return (
    <>
      <HeaderHome />
      <Box>
      <TitleHome>Home</TitleHome>
        <BtnCreateQuiz />
      </Box>
      <BoxUserStats>
        <UserStats />
        <div><BoxLastPassed>
          <TitleLastPassedQ>Last passed quizzes</TitleLastPassedQ>
          <ButtonSeeAll />
        </BoxLastPassed>
        <CardsAll/></div>
      </BoxUserStats>
      </>
  )
}

export default HomePage;