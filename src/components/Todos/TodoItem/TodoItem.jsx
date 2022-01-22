import './TodoItem.scss';

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        name={'0' + props.item.id}
        id={'0' + props.item.id} />
      <label htmlFor={props.item.id}>
        {props.item.title}
      </label>
      {props.item.completed && <button className="todo-item__delet">button</button>}
    </div>
  )
}

export default TodoItem