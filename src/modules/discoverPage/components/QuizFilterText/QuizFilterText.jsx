import RatingStarsRadio from "../RatingStarsRadio/RatingStarsRadio"
import { PStyled, RatingBox, ResultBox, SpanStyled, TextWrapper } from "./QuizFilterTextStyled"


const QuizFilterText = () => {
  return (
    <>    
    <TextWrapper>
        <ResultBox>
          <SpanStyled>Result:</SpanStyled>
          <PStyled>74</PStyled>
          <SpanStyled>
            (For adults, themes: Cinema, Science, Literature)
          </SpanStyled>
        </ResultBox>
        <RatingBox>
          <SpanStyled>Specify the desired rating:</SpanStyled>
          <RatingStarsRadio/>
        </RatingBox>
      </TextWrapper>
    </>
  )
}

export default QuizFilterText