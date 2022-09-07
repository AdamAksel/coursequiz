import styled from 'styled-components'

export const MainFlexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 80vh;
  flex-wrap: wrap;
`

export const QuestionArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 60%;
  width: 70%;
  margin: 1px;
  border: 1px solid black;
  border-radius: 20px;
  text-align: center;
  margin-top: 3vh;
  margin-right: 10vw;
  margin-left: 10vw;
`
export const AnswerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 10vw;
  width: 20vw;
  margin: 1px;
  border: 1px solid black;
  border-radius: 20px;
  text-align: center;
  margin: 1vh;
`

export const ScoreCountDiv = styled.div`
  position: absolute;
  height: 3vh;
  width: 5vw;
  top: 35%;
  left: 5%;
  transform: translate(0, -50%);
`

export const NextQuestionArrow = styled.div`
  position: absolute;
  height: 5vw;
  width: 5vw;
  top: 35%;
  right: 5%;
  transform: translate(0, -50%);
`

export const ArrowImg = styled.img`
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
`
