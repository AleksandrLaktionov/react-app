import './TodoItem.scss';

function TodoItem({ todo, change }) {
  return (
    <div className="todo-item">
      <input
        className='todo-item__check'
        type="checkbox"
        name={todo.id}
        id={todo.id}
        checked={todo.completed}
        onChange={(e) => {
          return change(todo.id)
        }}
      />
      <label
        htmlFor={'0' + todo.id}
        className='todo-item__title'>
        {todo.title}
      </label>
      {todo.completed && <button className="todo-item__delet"></button>}
    </div>
  )
}

export default TodoItem