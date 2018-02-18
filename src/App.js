import React, { Component } from 'react';
import './App.css';
import NotesContainer from './components/NotesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <NotesContainer />
      </div>
    );
  }
}

export default App;
