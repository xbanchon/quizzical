
export default function IntroPage(props) {
  return(
    <main className="intro--content">
      <h1 className="intro--title">Quizzical</h1>
      <p className="intro--description">
        Unleash your inner genius with Quizzical! 🧠 Test your knowledge, challenge friends, and discover fascinating facts across a multitude of categories. From pop culture to science, ignite your curiosity and compete for the trivia crown. Ready to become the ultimate trivia master?
      </p>
      <button className="intro--button" onClick={props.handleStart}>Start quiz</button>
    </main>
  )
}