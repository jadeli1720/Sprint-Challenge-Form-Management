import React from 'react';
import axios from "axios";
import Recipe from './Recipe'




class RecipeList extends React.Component {
    constructor(props) {
        super(props);
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
                this.setState({recipes:res.data});
                console.log('Data Retrieved!', res);
            })
            .catch(err => console.log('Sorry! The api is down', err))
    }

    render() {
        return (
            <div className="cardsContainer">
              <div>
                {this.state.recipes.map((recipe, index) => {
                  return (
                      <div>
                          <Recipe key={index.id}
                                  item={recipe} />
                      </div>
                  )
                })}
              </div>
            </div>
          );
    }
}

export default RecipeList;
