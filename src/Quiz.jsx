import React from 'react'
import Question from './Question'
import { nanoid } from 'nanoid'

export default function Quiz(props) {


  const allQuestions = props.questions.map(question => {
    return (
      <Question 
        key={ nanoid() }
        question={question.question}
        correctAnswer={question.correct_answer}
        incorrectAnswers={question.incorrect_answers}
      />
    )
  })

  return(
    <>
    <div className="quiz--content" >
      {allQuestions}
    </div>
    <button className="quiz--button">Check Answers</button>
    </>
  )
}