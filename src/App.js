import React, { Component } from 'react';
import './App.css';
import MessageDisplay from './components/MessageDisplay'
import MessageInputter from './components/MessageInputter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MessageDisplay />
        <MessageInputter />
      </div>
    );
  }
}

export default App;
