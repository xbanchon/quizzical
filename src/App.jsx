import React from "react"
import IntroPage from "./IntroPage"
import Quiz from "./Quiz"

export default function App() {
  const [hasStarted, setHasStarted] = React.useState(false)
  const [quizData, setQuizData] = React.useState([]) 


  React.useEffect(() => {
    console.log("Fetching data")
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(loadedQuestions => setQuizData(loadedQuestions.results))
    console.log(quizData)
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
