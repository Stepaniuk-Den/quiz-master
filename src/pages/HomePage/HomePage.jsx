import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonSeeAll from "../../shared/components/Buttons/ButtonSeeAll";
import UserStats from "../../modules/homepage/components/UserStats"
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar";
import QuizesList from "../../shared/components/QuizesList/QuizesList";
import { BoxLastPassed, BoxUserStats, TitleLastPassedQ, Container } from "./HomePageStyled";
import { selectPassed } from "../../redux/selectors";
import MediaQuery from "react-responsive";
import { getPassedQuizzesThunk } from "../../redux/quiz/quizThunks";

const HomePage = () => {
  const seeAllLink = "/lastquiz"; 
  const dispatch = useDispatch();
  const passedQuizzes = useSelector(selectPassed);

  useEffect(() => {
    if (passedQuizzes.length === 0) {
        dispatch(getPassedQuizzesThunk({ page: 1, limit: 8 }))
      }
        
    }, [dispatch, passedQuizzes]);
  


  const shouldDisplaySeeAll = passedQuizzes[0]?.length < 3;

  return (
    <Container>
      <PageTopBar titlePage="Home"/>
      
      <BoxUserStats>
        <UserStats />
        <div>
          <BoxLastPassed>
            <TitleLastPassedQ>Last passed quizzes</TitleLastPassedQ>
            {shouldDisplaySeeAll ? null : <ButtonSeeAll link={seeAllLink} />}
          </BoxLastPassed>
          <MediaQuery minWidth={1440}>
            {matches => (
              <QuizesList quizzesArr={matches ? passedQuizzes[0]?.slice(0, 3) : passedQuizzes[0]?.slice(0, 2)} />
            )}
          </MediaQuery>
         
        </div>
      </BoxUserStats>
    </Container>
  );
}

export default HomePage;
