import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import Amount from './views/Amount';

function App() {
  return (
    <div className="App">
      <Main/>
      <Main/>
      <h2>Things I need to do: </h2>
      <Amount/>
    </div>
  );
}

export default App;