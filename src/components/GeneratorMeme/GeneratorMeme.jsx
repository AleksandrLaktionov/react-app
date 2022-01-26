import { Component } from "react"
import { getData } from '../data'
import './GeneratorMeme.scss'

class GeneratorMeme extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topText: '',
      bottomText: '',
      newLocal: new URL('https://api.imgflip.com/get_memes'),
      allImgs: [],
      randImg: 'http://i.imgflip.com/1bij.jpg'
    }
  }

  componentDidMount() {
    getData(this.state.newLocal.toString())
      .then(data => {
        this.setState(prevState => ({
          allImgs: [...prevState.allImgs, ...data.data.memes]
        }))
      }).catch(e => console.log(e.name))
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  getRandomImg = (e) => {
    e.preventDefault()
    const randNumber = Math.floor(Math.random() * this.state.allImgs.length)
    this.setState(prevState => ({
      randImg: prevState.allImgs[randNumber].url
    }))
  }

  render() {
    return (
      <div className="generator">
        <form action="" className="generator-form" onSubmit={this.getRandomImg}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <button >Generating Meme</button>
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
        </form>
        <div className="generator-meme">
          <img
            src={this.state.randImg} alt='meme' />
          <h1 className="generator-meme__top">{this.state.topText}</h1>
          <h1 className="generator-meme__bottom">{this.state.bottomText}</h1>
        </div>
      </div>
    )
  }
}

export default GeneratorMeme