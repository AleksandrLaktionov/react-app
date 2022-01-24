import './App.scss';
import GeneratorMeme from './components/GeneratorMeme/GeneratorMeme';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="app">
      <Todos />
      <GeneratorMeme />
    </div>
  );
}

export default App;
