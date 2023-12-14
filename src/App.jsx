import React from "react"
import IntroPage from "./IntroPage"
import Quiz from "./Quiz"

export default function App() {
  const [hasStarted, setHasStarted] = React.useState(false)
  const [questions, setQuestions] = React.useState([]) 

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(loadedQuestions => setQuestions(loadedQuestions.results))
      
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
        questions={questions} />
    </>
  )
}
