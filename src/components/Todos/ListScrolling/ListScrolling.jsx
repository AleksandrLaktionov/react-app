const ListScrolling = ({ getNextList, getPreviousList }) => {
  return (
    <div className="list-scrolling">
      <button onClick={e => {
        getPreviousList(5)
      }}>{'<<<'}</button>
      ...
      <button onClick={e => {
        getNextList(5)
      }}>{'>>>'}</button>
    </div>
  )
}

export default ListScrolling