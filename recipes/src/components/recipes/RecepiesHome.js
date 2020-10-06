import axios from 'axios';
import React from 'react';
import requiresAuth from '../auth/requiresAuth';

import Recipe from './Recipe';
import AddRecipe from './AddRecipe';

class RecipesHome extends React.Component {
  state = {
    recipes: []
  }

  componentDidMount = () => {
    axios
      .get('http://localhost:5000/api/recipes')
      .then(response => {
        this.setState({
          recipes: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h2>You made it past auth!</h2>
        {this.state.recipes.map(recipe => {
          return (
            <Recipe
              recipe={recipe}
              key={recipe.id}
              title={recipe.title}
              source={recipe.source}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
              category={recipe.category}
            />
          )
        })}
        <AddRecipe
          recipes={this.state.recipes}
        />
      </div>
    )
  }
}

export default requiresAuth(RecipesHome);