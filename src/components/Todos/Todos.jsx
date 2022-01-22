import { Component } from "react";
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
    console.log('did mount')
    getTodos(this.state.newLocal.toString())
      .then(data => {
        this.setState(() => ({
          todos: data
        }))
      }).catch(e => console.log(e.name))
  }

  componentDidUpdate() {
    console.log('did update')
  }

  render() {
    console.log('render')
    const todoItems = this.state.todos.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      )
    }).slice(this.state.slice.to, this.state.slice.for)

    return (
      <div className="todos" >
        {todoItems}
      </div>
    )
  }
}

export default Todos