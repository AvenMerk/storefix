import React, { Component } from 'react';
import './App.css';
import Field from './components/field.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Field />
            <Field />
            <Field />
        </header>
      </div>
    );
  }
}

export default App;
