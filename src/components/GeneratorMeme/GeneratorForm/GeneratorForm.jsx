import './GeneratorForm.scss'

const GeneratorForm = ({getRandomImg, handleChange, topText, bottomText}) => {
  return (
    <form action="" className="generator-form" onSubmit={getRandomImg}>
      <input
        type="text"
        name="topText"
        placeholder="Top Text"
        value={topText}
        onChange={handleChange}
      />
      <button >Generating Meme</button>
      <input
        type="text"
        name="bottomText"
        placeholder="Bottom Text"
        value={bottomText}
        onChange={handleChange}
      />
    </form>)
};

export default GeneratorForm