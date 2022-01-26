import './ListScrolling.scss'

const ListScrolling = ({ getNextList, getPreviousList }) => {
  return (
    <div className="list-scrolling">
      <button onClick={e => {
        getPreviousList(5)
      }}>{'<<<'}</button>
      {[...'...'].map((item,index)=><span key={index}></span>)}
      <button onClick={e => {
        getNextList(5)
      }}>{'>>>'}</button>
    </div>
  )
}

export default ListScrolling