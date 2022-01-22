import { Component } from "react";
import TodoItem from "./TodoItem/TodoItem";
import './Todos.scss'

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        id: 1,
        title: 'Test1 state',
        completed: false
      },
      {
        id: 2,
        title: 'Test2 state',
        completed: true
      }
    ]
  }

  render() {

    const todoItems = this.state.map(item => {
      return (
        <TodoItem
          key={item.id}
          item={item}
        />
      )
    })

    return (
      <div className="todos">
        {todoItems}
      </div>
    )
  }
}

export default Todos