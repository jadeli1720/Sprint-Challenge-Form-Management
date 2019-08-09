import React from 'react';
import axios from "axios";
import RegForm from './RegForm';

import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    }
  }
    //life cycle method;
    componentDidMount() {
      this.fetchRecipes();
    }

    //.get(`http://localhost:5000/api/restricted/data`)
    //map over this data
    fetchRecipes = () => {
      axios
      .get(`http://localhost:5000/api/restricted/data`)
      .then(res => {
        // this.setState({recipe:data});
        console.log('Data Retrieved!', res);
      })
      .catch(err => console.log('Sorry! The api is down', err))
    }
  
  render() {
    return (
      <div className="App">
        <h1>Registration</h1>
        <RegForm />
        <div>
          {this.state.recipes.map(recipe => {
            return 
          })}
        </div>
      </div>
    );
  }
}

export default App;
