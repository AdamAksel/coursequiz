import React from 'react'
import {
  MainFlexbox,
  QuestionArea,
  AnswerDiv,
  ScoreCountDiv,
  NextQuestionArrow,
  ArrowImg,
} from './Main.elements'
import Arrow from '../Images/arrow.png'

const Main = () => {
  return (
    <MainFlexbox>
      <ScoreCountDiv>
        <h3>511/110</h3>
      </ScoreCountDiv>
      <NextQuestionArrow>
        <ArrowImg alt='nextQuestionArrow' src={Arrow} />
      </NextQuestionArrow>
      <QuestionArea>
        <h3>"let i = 0; i &gt; 0; i++"</h3>
      </QuestionArea>

      <AnswerDiv>1</AnswerDiv>
      <AnswerDiv>2</AnswerDiv>
      <AnswerDiv>3</AnswerDiv>
      <AnswerDiv>4</AnswerDiv>
    </MainFlexbox>
  )
}

export default Main
