import React, { useEffect, useState } from 'react';
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
  const [hasFetchedData, setHasFetchedData] = useState(false);

  useEffect(() => {
    if (!hasFetchedData) {
      dispatch(getPassedQuizzesThunk({ page: 1, limit: 3 }));
      setHasFetchedData(true);
    }
  }, [dispatch, hasFetchedData]);
  
  const shouldDisplaySeeAll = passedQuizzes?.length < 3;
  
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
              <QuizesList quizzesArr={matches ? passedQuizzes?.slice(0, 3) : passedQuizzes?.slice(0, 2)} />
            )}
          </MediaQuery>
         
        </div>
      </BoxUserStats>
    </Container>
  );
}

export default HomePage;
