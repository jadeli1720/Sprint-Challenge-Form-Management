import React from 'react';
import axios from "axios";
import RegForm from './components/RegForm';
import RecipeCards from './components/RecipeCards';

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
        <RecipeCards />
      </div>
    );
  }
}

export default App;
