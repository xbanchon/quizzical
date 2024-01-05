import React from 'react'
import Question from './Question'
import { nanoid } from 'nanoid'

export default function Quiz(props) {
  const [pointsCounter, setPointsCounter] = React.useState(0)
  const [hasChecked, setHasChecked] = React.useState(false)

  function addPoint() {
    setPointsCounter(prevState => prevState += 1)
  }

  function subtractPoint() {
    setPointsCounter(prevState => prevState -= 1)
  }
  
  function checkAnswers() {
    setHasChecked(prevState => !prevState)
    console.log(pointsCounter)
  }

  function restartQuiz() {
    setHasChecked(prevState => prevState = false)
  }

  const allQuestions = props.data.map(item => {
    return (
      <Question 
        key={nanoid()}
        question={item.question}
        correctAnswer={item.correct_answer}
        incorrectAnswers={item.incorrect_answers}
        hasChecked={hasChecked}
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