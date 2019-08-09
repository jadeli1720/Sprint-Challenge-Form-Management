import React from 'react';
import RegForm from './components/RegForm';
import RecipeCards from './components/RecipeList';

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
        <h1>Recipe's</h1>
        <RecipeCards />
      </div>
    );
  }
}

export default App;
