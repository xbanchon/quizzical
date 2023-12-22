
export default function Option (props) {

  const selectionStyles = {
    backgroundColor: props.isSelected ? "#D6DBF5" : "#F5F7FB",
    border: props.isSelected ? "none" : "1px solid #4D5B9E"
  }

  const afterCheckStyles = {
    backgroundColor: props.isCorrect ? "#94D7A2": (!props.isSelected ?  "#F5F7FB" : "#F8BCBC"),
    border: (props.isSelected || props.isCorrect) ? "none" : "1px solid #4D5B9E",
    opacity: props.isCorrect ? "1" : "0.5"
  }

  return (
    <span 
        className="question--answer" 
        style={!props.checkStatus ? selectionStyles : afterCheckStyles}
        onClick={props.handleSelection}
        >
          {props.text}
    </span>
  )
}