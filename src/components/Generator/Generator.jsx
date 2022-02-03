import { Component } from "react"
import { getData } from '../data'
import Loading from "../Loading/Loading"
import GeneratorForm from "./GeneratorForm/GeneratorForm"
import GeneratorMeme from "./GeneratorMeme/GeneratorMeme"
import './Generator.scss'

class Generator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topText: '',
      bottomText: '',
      newLocal: new URL('https://api.imgflip.com/get_memes'),
      randNumber: 0,
      allImgs: [],
      randImg: ''
    }
  }

  componentDidMount() {
    getData(this.state.newLocal.toString())
      .then(resp => {
        this.setState(prevState => ({
          allImgs: resp.data.memes,
          randImg: 'http://i.imgflip.com/1bij.jpg'
        }))
      }).catch(e => console.log(e.name))
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  getRandomImg = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const randNumber = Math.floor(Math.random() * this.state.allImgs.length)
    this.setState(prevState => ({
      randImg: prevState.allImgs[randNumber].url
    }))
  }

  render() {
    return (
      <div className="generator">
        <GeneratorForm
          getRandomImg={this.getRandomImg}
          handleChange={this.handleChange}
          topText={this.state.topText}
          bottomText={this.state.bottomText}
        />
        {!this.state.randImg.length ? <Loading /> : <GeneratorMeme
          randImg={this.state.randImg}
          topText={this.state.topText}
          bottomText={this.state.bottomText}
        />}
      </div>
    )
  }
}

export default Generator