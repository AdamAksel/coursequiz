import React, { useState } from 'react'
import {
  MainFlexbox,
  QuestionArea,
  AnswerDiv,
  ScoreCountDiv,
  NextQuestionArrow,
  ArrowImg,
  AnswerArea,
} from './Main.elements'
import Arrow from '../Images/arrow.png'
import { datatypes } from '../Questions/Datatypes'
import { variables } from '../Questions/Variables'

const Main = () => {
  const [questionArray, setQuestionArray] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState({})
  const [currentAnswers, setCurrentAnswers] = useState([])
  const [screen, setScreen] = useState(0)
  const [handleArray, setHandleArray] = useState([false, false])

  //Downloaded function to shuffle the finished questionArray.
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }
    return array
  }

  //Function to handle the alternatives for the quiz.
  function handleQuizOptions(num) {
    let tempArray = handleArray
    if (num === 2) {
      for (let i = 0; i < handleArray.length; i++) {
        tempArray[i] = true
      }
      console.log(handleArray)
      return setHandleArray([...tempArray])
    }
    if (!handleArray[num]) {
      tempArray[num] = true
    } else {
      tempArray[num] = false
    }
    console.log(handleArray)
    return setHandleArray([...tempArray])
  }

  //Function using the handle alternatives to create the quiz.
  function createQuiz() {
    let tempDatatypes = datatypes.slice()
    let tempVariables = variables.slice()
    let tempArray = []
    if (handleArray[0]) {
      tempArray = [...tempArray, ...tempDatatypes]
    }
    if (handleArray[1]) {
      tempArray = [...tempArray, ...tempVariables]
    }
    tempArray = shuffle(tempArray)
    setCurrentQuestion(tempArray[0])
    setCurrentAnswers([
      ...tempArray[0].rightAnswer,
      ...tempArray[0].wrongAnswers,
    ])
    setQuestionArray([...tempArray])
    setScreen(1)
  }

  return (
    <MainFlexbox>
      <ScoreCountDiv>
        <h3>511/110</h3>
      </ScoreCountDiv>

      {screen === 0 ? (
        <>
          <NextQuestionArrow>
            <ArrowImg
              onClick={() => createQuiz(handleArray)}
              alt='nextQuestionArrow'
              src={Arrow}
            />
          </NextQuestionArrow>
          <QuestionArea>
            <h3>What Kinds of questions do you want for your Quiz?</h3>
          </QuestionArea>
          <AnswerArea>
            <AnswerDiv
              style={handleArray[0] ? { color: 'green' } : { color: '#141c3a' }}
              onClick={() => handleQuizOptions(0)}
            >
              <h3>Datatypes</h3>
            </AnswerDiv>
            <AnswerDiv
              style={handleArray[1] ? { color: 'green' } : { color: '#141c3a' }}
              onClick={() => handleQuizOptions(1)}
            >
              <h3>Variables</h3>
            </AnswerDiv>
            <AnswerDiv onClick={() => handleQuizOptions(2)}>
              <h3>All</h3>
            </AnswerDiv>
          </AnswerArea>
        </>
      ) : screen === 1 ? (
        <>
          <NextQuestionArrow>
            <ArrowImg alt='nextQuestionArrow' src={Arrow} />
          </NextQuestionArrow>
          <QuestionArea>
            <h3>{questionArray[0].question}</h3>
          </QuestionArea>

          <AnswerArea>
            {currentAnswers.map((item) => (
              <>
                <AnswerDiv>{item}</AnswerDiv>
              </>
            ))}
          </AnswerArea>
        </>
      ) : null}
    </MainFlexbox>
  )
}

//myArray.map((item) => <p>{item}</p>)
/*
todo:
clicking the answers should check if it is the same as in questionArray[current].rightanswer
*/

export default Main
