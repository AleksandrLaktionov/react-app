import './TodoForm.scss';

const TodoForm = ({ changeTodo, setTodo, todo }) => {
  return (
    <form className="todo" onSubmit={setTodo}>
      <input
        type="text"
        className="todo-creating"
        name="todo"
        placeholder='Create todo'
        onChange={changeTodo}
        value={todo}
      />
      <button className='todo-saving'>Save</button>
    </form>
  )
}

export default TodoForm