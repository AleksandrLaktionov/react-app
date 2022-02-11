import { Component } from "react";
import ListScrolling from "./ListScrolling/ListScrolling";
import Loading from "../Loading/Loading";
import { doDataBase, deletDataBase } from "../../data";
import TodoItem from "./TodoItem/TodoItem";
import './Todos.scss';
import TodoForm from "./TodoForm/TodoForm";

class Todo {
  constructor(title) {
    this.id = Date.now()
    this.title = title
    this.completed = false
  }
}

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      slice: {
        to: 0,
        for: 5,
      },
    }
  }

  componentDidMount() {
    doDataBase('store', 1, 'todos')
      .then(db => {
        return db.getAll('todos')
      })
      .then(todos => {
        this.setState(prevState => ({
          todos: [...prevState.todos, ...todos]
        }))
      }).catch(e => console.log(e.name))
  }

  // componentDidUpdate() {
  //   console.log(this.state.todos)
  // }

  // componentWillUnmount() {
  //   deletDataBase('store')
  // }

  setTodo = (event) => {
    event.preventDefault()

    doDataBase('store', 1, 'todos')
      .then(
        // доповляем задачу
        db => {
          db.add('todos', new Todo(event.target.todo.value))
          return db.getAll('todos')
        }
      )
      .then(
        // обновляем список дел в state
        newTodos => {
          this.setState({
            todos: newTodos
          })
        })
      // обнуляем поле ввода
      .then(() => event.target.todo.value = '')
      .catch(err => console.log(err.name, err.message))
  }

  handleChange = (id) => {
    doDataBase('store', 1, 'todos')
      // получаем объект из бд по id
      .then(db => db.get('todos', id)
        // изменяем в объекте св-во completed
        .then(objDB => ({ ...objDB, ...{ completed: !objDB.completed } }))
        .then(todo => todo))
      // изменяем объект в бд по id
      .then(obj => doDataBase('store', 1, 'todos')
        .then(db => db.put('todos', obj)))
      .then(res => {
        // обновляем список в state
        doDataBase('store', 1, 'todos')
          .then(db => db.getAll('todos'))
          .then(newTodos => {
            this.setState({
              todos: newTodos
            })
          })
          .catch(e => console.log(e.name, e.message))
      })
      .catch(e => console.log(e.name, e.message))
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
    })
      .slice(this.state.slice.to, this.state.slice.for)
      .reverse()

    return (
      <div className="todos" >
        <TodoForm setTodo={this.setTodo} />
        {< Loading /> && todoItems}
        {this.state.todos.length >= 5 && < ListScrolling
          getNextList={this.getNextList}
          getPreviousList={this.getPreviousList}
        />}
      </div >
    )
  }
}

export default Todos