import './TodoForm.scss';

const TodoForm = ({setTodo}) => {
  return (
    <form className="todo" onSubmit={setTodo}>
      <input type="text" className="todo-creating" name="todo" placeholder='Create todo' />
      <button className='todo-saving'>Save</button>
    </form>
  )
}

export default TodoForm