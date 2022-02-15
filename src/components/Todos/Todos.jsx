import { Component } from "react";
import { doDataBase, deletDataBase } from "../../data";
import TodoForm from "./TodoForm/TodoForm";
import TodoItem from "./TodoItem/TodoItem";
import ClearTodos from "./ClearTodos/ClearTodos";
import Loading from "../Loading/Loading";
import './Todos.scss';

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
      todo: '',
      todos: []
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
      })
      .catch(e => console.log(e.name, e.message))
  }

  // componentWillUnmount() {
  //   deletDataBase('store')
  // }

  changeTodo = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  setTodo = (e) => {
    e.preventDefault()
    if (this.state.todo.length > 0)
      doDataBase('store', 1, 'todos')
        .then(
          // доповляем задачу в бд
          db => {
            db.add('todos', new Todo(this.state.todo))
            return db.getAll('todos')
          }
        )
        .then(
          // обновляем список дел в state
          newTodos => {
            this.setState({
              todo: '',
              todos: newTodos
            })
          })
        .catch(err => console.log(err.name, err.message))
  }

  deletTodo = (id) => {
    doDataBase('store', 1, 'todos')
      .then(
        // удаляем задачу из списка дел в бд
        db => {
          db.delete('todos', id)
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
  }

  clearTodos = (e) => {
    e.preventDefault()
    doDataBase('store', 1, 'todos')
      .then(db => db.clear('todos'))
      .then(this.setState({ todos: [] }))
  }

  handleCheck = (id) => {
    doDataBase('store', 1, 'todos')
      // получаем объект из бд по id
      .then(db => db.get('todos', id)
        // изменяем в объекте бд св-во completed
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

  render() {
    const todoItems = this.state.todos.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          handleCheck={this.handleCheck}
          deletTodo={this.deletTodo}
          todo={todo}
        />
      )
    }).reverse()

    return (
      <div className="todos" >
        <TodoForm
          changeTodo={this.changeTodo}
          setTodo={this.setTodo}
          todo={this.state.todo} />
        {< Loading /> && todoItems}
        {!!this.state.todos.length && < ClearTodos clearTodos={this.clearTodos} />}
      </div >
    )
  }
}

export default Todos