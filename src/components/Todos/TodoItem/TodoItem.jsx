import './TodoItem.scss';

const TodoItem = ({ todo, handleCheck, deletTodo }) => {
  const date = new Date()
  return (
    <div className="todo-item">
      <input
        className='todo-item__check'
        type="checkbox"
        name={todo.id}
        id={todo.id}
        checked={todo.completed}
        onChange={e => handleCheck(todo.id)}
      />
      <label
        htmlFor={todo.id}
        className='todo-item__title'>
        {todo.title}
      </label>
      <span className='todo-item__time'>
        {date.getDate()}.
        {date.getMonth() < 9 ?
          '0' + (date.getMonth() + 1) :
          '' + (date.getMonth() + 1)
        }.
        {date.getFullYear()}
      </span>
      {todo.completed && <button
        className='todo-item__delet'
        onClick={e => deletTodo(todo.id)}></button>}
    </div>
  )
}

export default TodoItem