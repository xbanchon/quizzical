
export default function IntroPage(props) {
  return(
    <main className="intro--content">
      <h1 className="intro--title">Quizzical</h1>
      <p className="intro--description">
        Some description lmao
      </p>
      <button className="intro--button" onClick={props.handleStart}>Start quiz</button>
    </main>
  )
}