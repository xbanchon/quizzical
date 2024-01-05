import React from 'react'
import { nanoid } from 'nanoid'
import Option from './Option'
import he from 'he'

export default function Question(props) {
  const [answers, setAnswers] = React.useState(shuffleAnswers())

  function shuffleAnswers(){
    const shuffledAnswers = allNewAnswers(props.correctAnswer, props.incorrectAnswers)
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

  function selectAnswer(id) {
    setAnswers(oldAnswers => oldAnswers.map((answer) =>{
      return (!answer.isSelected && answer.id !== id) ?
          answer :
         {...answer, isSelected: !answer.isSelected}
    }))
  }

  const answerElements = answers.map(answer => {
    return (
      <Option 
        key={answer.id}
        text={he.decode(answer.text)}
        isSelected={answer.isSelected}
        isCorrect={answer.isCorrect}
        handleSelection={() => selectAnswer(answer.id)}
        pointAddition={props.pointAddition}
        pointDeduction={props.pointDeduction}
        checkStatus={props.hasChecked}
      />
    )
  })

  return(
    <div className="question--container">
      <h2 className="question--question">{he.decode(props.question)}</h2>
      <div className="answers--container">
        {answerElements}
      </div>
      <hr />
    </div>
  )
}