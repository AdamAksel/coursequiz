import React, { useState } from 'react'
import {
  MainFlexbox,
  QuestionArea,
  QuestionContainer,
  QuestionType,
  CommentArea,
  AnswerDiv,
  ScoreCountDiv,
  NextQuestionArrow,
  ArrowImg,
  AnswerArea,
  QuestionContainerStart,
} from './Main.elements'
import Arrow from '../Images/arrow.png'
import Play from '../Images/play.png'
import Reset from '../Images/reset.png'
import { datatypes } from '../Questions/Datatypes'
import { variables } from '../Questions/Variables'

const Main = () => {
  const [questionArray, setQuestionArray] = useState([])
  const [currentAnswers, setCurrentAnswers] = useState([])
  const [screen, setScreen] = useState(0)
  const [handleArray, setHandleArray] = useState([false, false])
  const [hasAnswered, setHasAnswered] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [totalAnswers, setTotalAnswers] = useState(0)
  const [questionNum, setQuestionNum] = useState(0)

  //Downloaded function to shuffle the finished questionArray.
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex
    while (currentIndex !== 0) {
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
    if (!handleArray.includes(true)) {
      return null
    }
    let tempDatatypes = datatypes.slice()
    let tempVariables = variables.slice()
    let tempArray = []
    let tempAnswerArray = []
    if (handleArray[0]) {
      tempArray = [...tempArray, ...tempDatatypes]
    }
    if (handleArray[1]) {
      tempArray = [...tempArray, ...tempVariables]
    }
    tempArray = shuffle(tempArray)
    tempAnswerArray = [
      ...tempArray[0].rightAnswer,
      ...tempArray[0].wrongAnswers,
    ]
    tempAnswerArray = shuffle(tempAnswerArray)
    setCurrentAnswers([...tempAnswerArray])
    setQuestionArray([...tempArray])
    setScreen(1)
  }

  //onClick for checking answers
  function answerFunction(e) {
    if (e.currentTarget.innerHTML == questionArray[questionNum].rightAnswer) {
      setCorrectAnswers(correctAnswers + 1)
    }
    setTotalAnswers(totalAnswers + 1)
    setHasAnswered(true)
  }
  //Function for moving to the next question or endscreen
  function nextQuestion() {
    console.log(questionNum, questionArray.length)
    if (questionNum === questionArray.length - 1) {
      return setScreen(screen + 1)
    }
    setHasAnswered(false)
    setQuestionNum(questionNum + 1)
    let tempAnswerArray = [
      ...questionArray[questionNum + 1].rightAnswer,
      ...questionArray[questionNum + 1].wrongAnswers,
    ]
    tempAnswerArray = shuffle(tempAnswerArray)
    setCurrentAnswers([...tempAnswerArray])
  }

  function resetQuiz() {
    setCorrectAnswers(0)
    setTotalAnswers(0)
    let tempArray = []
    setQuestionNum(0)
    setHandleArray([...tempArray])
    setHasAnswered(false)
    setScreen(0)
  }

  return (
    <MainFlexbox>
      {screen === 0 ? (
        <>
          <NextQuestionArrow>
            <ArrowImg
              onClick={() => createQuiz(handleArray)}
              alt='nextQuestionArrow'
              src={Play}
            />
          </NextQuestionArrow>
          <QuestionContainerStart>
            <h3>What Kinds of questions do you want for your Quiz?</h3>
          </QuestionContainerStart>
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
          <ScoreCountDiv>
            <h3>
              {correctAnswers}/{totalAnswers}
            </h3>
          </ScoreCountDiv>
          <NextQuestionArrow>
            {hasAnswered && (
              <ArrowImg
                onClick={() => nextQuestion()}
                alt='nextQuestionArrow'
                src={Arrow}
              />
            )}
          </NextQuestionArrow>
          <QuestionContainer>
            <QuestionType>
              <h3>{questionArray[questionNum].questionSort}</h3>
            </QuestionType>
            <QuestionArea>
              <h3>{questionArray[questionNum].question}</h3>
            </QuestionArea>
            <CommentArea>
              {hasAnswered && <h4>{questionArray[questionNum].comment}</h4>}
            </CommentArea>
          </QuestionContainer>

          <AnswerArea>
            {currentAnswers.map((item) => (
              <AnswerDiv
                style={
                  !hasAnswered
                    ? { color: 'none' }
                    : hasAnswered &&
                      item == questionArray[questionNum].rightAnswer
                    ? { color: 'green' }
                    : hasAnswered
                    ? { color: 'red' }
                    : { color: 'none' }
                }
                key={Math.random() * 100000000}
                onClick={(e) => answerFunction(e)}
              >
                {item}
              </AnswerDiv>
            ))}
          </AnswerArea>
        </>
      ) : screen === 2 ? (
        <>
          <NextQuestionArrow>
            <ArrowImg onClick={() => resetQuiz()} alt='resetquiz' src={Reset} />
          </NextQuestionArrow>
          <QuestionContainer>
            <QuestionType>
              <h3>Congratulations</h3>
            </QuestionType>
            <QuestionArea>
              <h3>
                Your Score Was {correctAnswers}/{totalAnswers}
              </h3>
            </QuestionArea>
            <CommentArea>
              <h3>Do you want to play again?</h3>
            </CommentArea>
          </QuestionContainer>

          <AnswerArea></AnswerArea>
        </>
      ) : null}
    </MainFlexbox>
  )
}

export default Main
