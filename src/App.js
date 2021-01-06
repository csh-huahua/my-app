import logo from './logo.svg';
import './App.css';
import { Router, Route, Link } from 'react-router'

// import About from './view/about';
// import Inbox from './view/inbox';

function App () {
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
        <ul>
          {/* <li><Link to="/about">About</Link></li> */}
          {/* <li><Link to="/inbox">Inbox</Link></li> */}
        </ul>
      </header>
    </div>
  );
}

export default App;
