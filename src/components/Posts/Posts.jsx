import { Component } from "react"
import { getData, postData } from '../data'
import Loading from "../Loading/Loading"
import PostForm from "./PostForm/PostForm"
import PostItem from "./PostItem/PostItem"
import './Posts.scss'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {
        userId: 1,
        id: 1,
        title: '',
        body: '',
      },
      newLocal: new URL('https://jsonplaceholder.typicode.com/posts'),
      posts: []
    }
  }

  componentDidMount() {
    const url = this.state.newLocal
    getData(url.href)
      .then(data => {
        this.setState(prevState => ({
          posts: [...prevState.posts, ...data]
        }))
      }).catch(e => console.log(e.name))
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState(prevState => {
      return {
        post: {
          ...prevState.post,
          ...{
            [name]: value,
            id: prevState.posts.length + 1
          }
        }
      }
    })
  }

  setPost = e => {
    e.preventDefault()
    const url = this.state.newLocal
    postData(url.href, this.state.post)
      .then(resp => this.setState(prevState => {
        return {
          posts: [
            ...prevState.posts,
            resp
          ]
        }
      }))
      .catch(e => console.error(e.name, e.message))
  }

  render() {
    const postItems = this.state.posts.map(post => {
      return (
        <PostItem key={post.id} post={post} />
      )
    })
    return (
      <div className="posts">
        <PostForm
          post={this.state.post}
          handleChange={this.handleChange}
          setPost={this.setPost}
        />
        {<Loading /> && postItems}
      </div>
    )
  }
}

export default Posts