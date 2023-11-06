import { Answers, BtnStartS, TextAnswers } from "./BtnStartStyled";
import { useLocation } from 'react-router-dom';

const BtnStart = ({quantityQuestions,correctAnswers}) => {
  const location = useLocation();

  const isLastQuizOrHome = location.pathname === '/lastquiz' || location.pathname === '/home';

  const handleBtnStart = () => {
  }

  return (
    <>
      {isLastQuizOrHome ? (
        <>
          <TextAnswers>Correct answers:<Answers>{correctAnswers}/{quantityQuestions}</Answers></TextAnswers>
          <BtnStartS type="button" onClick={handleBtnStart}>
            Pass again
          </BtnStartS>
        </>
      ) : (
        <BtnStartS type="button" onClick={handleBtnStart}>
          Start
        </BtnStartS>
      )}
    </>
  );
};

export default BtnStart;
