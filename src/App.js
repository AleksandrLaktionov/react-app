import './App.scss';
import Clock from './components/Clock/Clock';
import Generator from './components/Generator/Generator';
import Posts from './components/Posts/Posts';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="app">
      <Clock />
      <Todos />
      <Generator />
      <Posts />
    </div>
  );
}

export default App;