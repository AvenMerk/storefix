import React, { Component } from 'react';
import './App.css';
import Field from './components/field.js';
import Button from './components/button.js';
// import RequestContainer from './containers/requestContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
           {/*<RequestContainer />*/}
          <div>
              <Field />
              <Field />
              <Field />
              <Button buttonName='Добавить новое оборудование' />
          </div>
      </div>
    );
  }
}

export default App;
