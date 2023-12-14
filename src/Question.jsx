
export default function Question(props) {

  // const styles = {
  //   backgroundColor: props.isSelected ? "#D6DBF5" : "#F5F7FB",
  //   border: props.isSelected ? "none" : "1px solid #4D5B9E"
  // }
  const answers = props.incorrectAnswers.map(answer => {
    return (
      <span className="question--answer">{answer}</span>
    )
  })

  return(
    <div className="question--container">
      <h2 className="question--question">{props.question}</h2>
      <div className="answers--container">
        {answers}
      </div>
      <hr />
    </div>
  )
}