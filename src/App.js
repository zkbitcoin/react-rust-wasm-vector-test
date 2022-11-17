import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import init, {test_vector} from "./rust/pkg-multicore";

function App() {

  useEffect(() => {
      init().then(() => {
          test_vector();
      })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
