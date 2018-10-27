import React, { Component } from 'react';
import stiles from './stiles.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={stiles} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
