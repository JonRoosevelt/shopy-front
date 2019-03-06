import React, { Component } from 'react';
import './App.css';
import ComponentItems from './Logic/ComponentItems'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>SHOPY</h1>
        </header>
				<ComponentItems />
      </div>
    );
  }
}

export default App;
