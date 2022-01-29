import './TodoItem.scss';

const TodoItem = ({ todo, handleChange }) => {

  return (
    <div className="todo-item">
      <input
        className='todo-item__check'
        type="checkbox"
        name={'0' + todo.id}
        id={'0' + todo.id}
        checked={todo.completed}
        onChange={e => handleChange(todo.id)}
      />
      <label
        htmlFor={'0' + todo.id}
        className='todo-item__title'>
        {todo.title}
      </label>
    </div>
  )
}

export default TodoItem