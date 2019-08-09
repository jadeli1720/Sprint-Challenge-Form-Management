import React from 'react';
import RegForm from './RegForm';

import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Registration</h1>
        <RegForm />
      </div>
    );
  }
}

export default App;
