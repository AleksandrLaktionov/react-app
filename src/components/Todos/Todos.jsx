import { Component } from "react";
import ListScrolling from "./ListScrolling/ListScrolling";
import getTodos from "./TodoItem/dataTodos";
import TodoItem from "./TodoItem/TodoItem";
import './Todos.scss'

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slice: {
        to: 0,
        for: 5,
      },
      todos: [],
      newLocal: new URL('https://jsonplaceholder.typicode.com/todos/?userId=1')
    }
  }

  componentDidMount() {
    getTodos(this.state.newLocal.toString())
      .then(data => {
        this.setState(prevState => ({
          todos: [...prevState.todos, ...data]
        }))
      }).catch(e => console.log(e.name))
  }

  handleChange = (id) => {
    console.log('handleChange')
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          return todo.id === id ? {...todo, ...{completed: !todo.completed}} : todo
        })
      }
    })
  }

  getNextList = (n) => {
    console.log('getNextList')
    this.setState(prevState => {
      if (prevState.slice.for < prevState.todos.length) {
        return {
          slice: {
            to: prevState.slice.to + n,
            for: prevState.slice.for + n,
          }
        }
      }
    })
  }

  getPreviousList = (p) => {
    console.log('getPreviousList')
    this.setState(prevState => {
      if (prevState.slice.to > 0) {
        return {
          slice: {
            to: prevState.slice.to - p,
            for: prevState.slice.for - p,
          }
        }
      }
    })
  }

  render() {
    const todoItems = this.state.todos.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          handleChange={this.handleChange}
          todo={todo}
        />
      )
    }).slice(this.state.slice.to, this.state.slice.for)

    return (
      <div className="todos" >
        {todoItems}
        <ListScrolling
          getNextList={this.getNextList}
          getPreviousList={this.getPreviousList}
        />
      </div>
    )
  }
}

export default Todos