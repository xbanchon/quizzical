import React from 'react'
import Option from './Option'
import he from 'he'

export default function Question(props) {
  
  const answerElements = props.answers?.map(answer => {
    return (
      <Option 
        key={answer.id}
        text={he.decode(answer.text)}
        isSelected={answer.isSelected}
        isCorrect={answer.isCorrect}
        handleSelection={() => props.handleChange(answer.id, props.question)}
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