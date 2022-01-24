import React, { useState } from 'react'
import './TodoItem.scss';

function TodoItem({ todo }) {

  const [state, setState] = useState(todo)

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
    </div>
  )
}

export default TodoItem