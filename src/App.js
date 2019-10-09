import './App.css';

import React from 'react';
import logo from './logo.svg';

class HelloMessage extends React.Component {

  componentDidMount() {
    console.log("after mounted " + (performance.now() - window.t0) + " milliseconds.");
  }

  render() {
    if (window !== null && !window.csrOnly) {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: ''
          }}
          suppressHydrationWarning
        />
      );
    }
    else {
      return (
        <div>Hello {this.props.name}</div>
      );
    }
  }
}

function App() {
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
      <HelloMessage name="Eric" />
    </div>
  );
}

export default App;
