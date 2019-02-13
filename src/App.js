import React, { Component } from 'react';
import './App.css';
import Field from './components/field.js';
import Button from './components/button.js';

const buttonName = 'Добавить оборудование';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Field />
            <Field />
            <Field />
            <Button buttonName={buttonName} />
      </div>
    );
  }
}

export default App;
