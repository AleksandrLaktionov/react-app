import './GeneratorMeme.scss'

const GeneratorMeme = ({ randImg, topText, bottomText }) => {
  return (
    <div className="generator-meme">
      <img
        src={randImg} alt='meme' />
      <h1 className="generator-meme__top">{topText}</h1>
      <h1 className="generator-meme__bottom">{bottomText}</h1>
    </div>
  )
}

export default GeneratorMeme;