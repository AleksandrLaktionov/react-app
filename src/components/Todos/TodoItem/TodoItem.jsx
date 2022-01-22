import React, { useState } from 'react'
import './TodoItem.scss';

function TodoItem({ todo }) {

  const [state, setState] = useState(todo)
  console.log(state)
  return (
    <div className="todo-item">
      <input
        className='todo-item__check'
        type="checkbox"
        name={state.id}
        id={state.id}
        checked={state.completed}
        onChange={() => {
          setState(prevState => ({
            ...prevState,
            ...{ completed: !prevState.completed }
          }))
        }}
      />
      <label
        htmlFor={'0' + state.id}
        className='todo-item__title'>
        {state.title}
      </label>
      {state.completed && <button className="todo-item__delet"></button>}
    </div>
  )
}

export default TodoItem