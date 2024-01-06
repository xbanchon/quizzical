import React from "react"
import IntroPage from "./IntroPage"
import Quiz from "./Quiz"

export default function App() {
  const [hasStarted, setHasStarted] = React.useState(false)
  const [quizData, setQuizData] = React.useState([])
  const [attempts, setAttempts] = React.useState(0) 

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(loadedQuestions => setQuizData(loadedQuestions.results))
  },[attempts])

  function refreshQuestions() {
    setAttempts(oldAttempts => oldAttempts += 1)
  }

  function handleStart() {
    setHasStarted(oldHasStarted => oldHasStarted = true)
  }

  return (
    <>
      {
      !hasStarted ? 
        <IntroPage 
          handleStart={handleStart}/> : 
        <Quiz
          data={quizData}
          handleRefresh={refreshQuestions} />
      }
    </>
  )
}
