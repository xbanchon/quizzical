import React from 'react'
import Question from './Question'
import { nanoid } from 'nanoid'

export default function Quiz(props) {
  const [pointsCounter, setPointsCounter] = React.useState(0)
  const [hasChecked, setHasChecked] = React.useState(false)
  const [quizQuestions, setQuizQuestions] = React.useState([])

  function shuffleAnswers(correctAnswer, incorrectAnswers){
    const shuffledAnswers = allNewAnswers(correctAnswer, incorrectAnswers)
                              .sort((a, b) => {
                                if(a.text > b.text) return 1
                                if(a.text < b.text) return -1
                                return 0
                              })
    if(shuffledAnswers.length === 2) return shuffledAnswers.reverse()
    else return shuffledAnswers
  }

  function allNewAnswers(correctAnswer, incorrectAnswers) {
    const newAnswers = []

    newAnswers.push({
      text: correctAnswer,
      isSelected: false,
      isCorrect: true,
      id: nanoid()
    })
    for(const answer of incorrectAnswers){
      newAnswers.push({
        text: answer,
        isSelected: false,
        isCorrect: false,
        id: nanoid()
      })
    }
    return newAnswers
  }

  function allNewQuestions(questions) {
    const newQuestions = []

    for(const item of questions){
      newQuestions.push({
        id: nanoid(),
        question: item.question,
        answers: shuffleAnswers(item.correct_answer, item.incorrect_answers)
      })
    }
    return newQuestions
  }

  React.useEffect(() => {
    setQuizQuestions(allNewQuestions(props.data))
  },[props.data])

  function selectAnswer(id) {
    setQuizQuestions(oldQuizQuestions => {
      for(const item of oldQuizQuestions){
        item.answers.map(answer => {
          return (!answer.isSelected && answer.id !== id) ?
          answer :
         {...answer, isSelected: !answer.isSelected}
        })
      }
    })
  }

  function addPoint() {
    setPointsCounter(prevState => prevState += 1)
  }

  function subtractPoint() {
    setPointsCounter(prevState => prevState -= 1)
  }
  
  function checkAnswers() {
    // setHasChecked(prevState => !prevState)
    // console.log(pointsCounter)
    console.log(quizQuestions)
  }

  function restartQuiz() {
    setHasChecked(prevState => prevState = false)
  }

  const allQuestions = quizQuestions.map(item => {
    return (
      <Question 
        key={item.id}
        question={item.question}
        answers={item.answers}
        hasChecked={hasChecked}
        // handleChange={selectAnswer}
        pointAddition={addPoint}
        pointDeduction={subtractPoint}
      />
    )
  })

  return(
    <>
    <div className="quiz--content" >
      {allQuestions}
      <div className="quiz--bottom">
        {
          hasChecked && 
          <span className="quiz--result">{`You scored ${pointsCounter}/5 correct answers`}</span>
        }
        <button className="quiz--button" onClick={checkAnswers}>
          {!hasChecked ? "Check Answers" : "Play again" }
        </button>
      </div>
    </div>
    </>
  )
}