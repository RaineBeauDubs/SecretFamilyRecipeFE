import axios from 'axios';
import React from 'react';
import requiresAuth from '../auth/requiresAuth';

import Recipe from './Recipe';
import AddRecipe from './AddRecipe';

const token = localStorage.getItem('token');


class RecipesHome extends React.Component {
  state = {
    recipes: [],
    userId: ''
  }

  componentDidMount = () => {
    axios
      .get('http://localhost:5000/api/recipes')
      .then(response => {
        this.setState({
          recipes: response.data,
          userId: this.getUserId(token)
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getUserId = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const id = (JSON.parse(window.atob(base64)).subject);
    return id;
  }

  render() {
    return (
      <div>
        <h2>You made it past auth!</h2>
        {this.state.recipes.map(recipe => {
          if (recipe.user_id === this.state.userId) {
            return (
              <div>
                <Recipe
                  recipe={recipe}
                  id={recipe.id}
                  key={recipe.id}
                  title={recipe.title}
                  source={recipe.source}
                  ingredients={recipe.ingredients}
                  instructions={recipe.instructions}
                  category={recipe.category}
                  userId={recipe.user_id}
                />
              </div>
            )
          }
        })}
        <AddRecipe
          recipes={this.state.recipes}
          getUserId={this.getUserId}
        />
      </div>
    )
  }
}

export default requiresAuth(RecipesHome);