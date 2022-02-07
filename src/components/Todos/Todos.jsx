import { Component } from "react";
import ListScrolling from "./ListScrolling/ListScrolling";
import { doDataBase, deletDataBase } from "../../data";
import TodoItem from "./TodoItem/TodoItem";
import './Todos.scss';
import Loading from "../Loading/Loading";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slice: {
        to: 0,
        for: 5,
      },
      todos: [],
    }
  }

  componentDidMount() {
    doDataBase('store')
      .then(db => {
        db.put('todos', {
          id: 1,
          title: 'text',
          completed: false
        })
        db.put('todos', {
          id: 2,
          title: 'next text',
          completed: true
        })
        db.put('todos', {
          id: 3,
          title: 'test',
          completed: true
        })
        db.put('todos', {
          id: 4,
          title: 'new next test',
          completed: true
        })
        return db.getAll('todos')
      }).then(todos => {
        this.setState(prevState => ({
          todos: [...prevState.todos, ...todos]
        }))
      }).catch(e => console.log(e.name))
  }

  componentWillUnmount() {
    deletDataBase('store')
  }

  handleChange = (id) => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          return todo.id === id ? { ...todo, ...{ completed: !todo.completed } } : todo
        })
      }
    })
  }

  getNextList = (n) => {
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
        {<Loading /> && todoItems}
        <ListScrolling
          getNextList={this.getNextList}
          getPreviousList={this.getPreviousList}
        />
      </div>
    )
  }
}

export default Todos