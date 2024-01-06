import React from "react"
import IntroPage from "./IntroPage"
import Quiz from "./Quiz"
import { nanoid } from "nanoid"

export default function App() {
  const [hasStarted, setHasStarted] = React.useState(false)
  const [quizData, setQuizData] = React.useState([]) 

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(loadedQuestions => setQuizData(loadedQuestions.results))
  },[])

  function handleStart() {
    setHasStarted(prevState => !prevState)
  }

  return (
    <>
      {/* {
      !hasStarted ? 
        <IntroPage 
          handleStart={handleStart}/> : 
        } */}
      <Quiz
        data={quizData} />
    </>
  )
}
