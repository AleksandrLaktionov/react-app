import './App.scss';
import Generator from './components/GeneratorMeme/Generator';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="app">
      <Todos />
      <Generator />
    </div>
  );
}

export default App;
