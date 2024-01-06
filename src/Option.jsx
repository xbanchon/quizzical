import React from "react"

export default function Option (props) {

  const selectionStyles = {
    backgroundColor: props.isSelected ? "#D6DBF5" : "#F5F7FB",
    border: props.isSelected ? "1px solid transparent" : "1px solid #4D5B9E"
  }

  const afterCheckStyles = {
    backgroundColor: props.isCorrect ? "#94D7A2": (props.isSelected ?  "#F8BCBC" : "#F5F7FB"),
    border: (props.isSelected || props.isCorrect) ? "1px solid transparent" : "1px solid #4D5B9E",
    opacity: props.isCorrect ? "1" : "0.5",
    cursor: "default"
  }

  // if(props.isCorrect && !props.isSelected) {
  //   console.log("correct selected")
  //   props.pointAddition()
  // }
  // else if (!props.isCorrect && !props.isSelected) {
  //   console.log("incorrect selected")
  //   props.pointDeduction()
  // }

  return (
    <span 
        className="question--answer" 
        style={!props.checkStatus ? selectionStyles : afterCheckStyles}
        onClick={!props.checkStatus ? props.handleSelection : undefined}
        >
          {props.text}
    </span>
  )
}