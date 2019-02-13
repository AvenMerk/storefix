import React, { Component } from 'react';
import './App.css';
import RequestContainer from './containers/requestContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
           <RequestContainer />
      </div>
    );
  }
}

export default App;
