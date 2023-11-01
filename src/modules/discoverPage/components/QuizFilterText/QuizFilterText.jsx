import RatingStarsRadio from "../RatingStarsRadio/RatingStarsRadio"
import { PStyled, RatingBox, ResultBox, SpanStyled, TextWrapper } from "./QuizFilterTextStyled"


const QuizFilterText = ({handleStarSelection, totalResults}) => {
  return (
    <>    
    <TextWrapper>
        <ResultBox>
          <SpanStyled>Result:</SpanStyled>
          <PStyled>{totalResults}</PStyled>
          <SpanStyled>
            (For adults, themes: Cinema, Science, Literature)
          </SpanStyled>
        </ResultBox>
        <RatingBox>
          <SpanStyled>Specify the desired rating:</SpanStyled>
          <RatingStarsRadio handleStarSelection={handleStarSelection}/>
        </RatingBox>
      </TextWrapper>
    </>
  )
}

export default QuizFilterText