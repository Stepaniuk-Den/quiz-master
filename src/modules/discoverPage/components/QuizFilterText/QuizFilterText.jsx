import { PStyled, RatingBox, RatingStars, ResultBox, SpanStyled, TextWrapper } from "./QuizFilterTextStyled"


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
          <RatingStars>*****</RatingStars>
        </RatingBox>
      </TextWrapper>
    </>
  )
}

export default QuizFilterText