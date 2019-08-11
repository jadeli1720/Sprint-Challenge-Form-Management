import React from 'react';
import RegForm from './components/RegForm';
import RecipeList from './components/RecipeList';

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
        <div className="header">
          <h1>Recipes</h1>
          <RegForm />
          
        </div>
        <div className="Main">
          {/* <h1>Recipe's</h1> */}
          <RecipeList />
        </div>
      </div>
    );
  }
}

export default App;
