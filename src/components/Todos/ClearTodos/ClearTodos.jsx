import './ClearTodos.scss'

const ClearTodos = ({ clearTodos }) => {
  return (
    <div className="clear">
      <button onClick={clearTodos}>Clear</button>
    </div>
  )
}

export default ClearTodos