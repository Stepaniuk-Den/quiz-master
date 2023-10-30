import ButtonSeeAll from "../../components/ButtonSeeAll";
import UserStats from "../../components/UserStats"
import BtnCreateQuiz from "../../shared/components/Buttons/BtnCreateQuiz/BtnCreateQuiz";
import CardsAll from "../../shared/components/CardsAll/CardsAll";
import HeaderHome from "../../shared/components/HeaderHome";
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