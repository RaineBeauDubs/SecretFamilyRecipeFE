import axios from 'axios';
import React from 'react';
import requiresAuth from '../auth/requiresAuth';
import { Route, Link } from 'react-router-dom';

import MyRecipes from './MyRecipes';
import AddRecipe from './AddRecipe';

import './recipes.css';

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
      <div className='recipeHomeCont'>
        <MyRecipes
          recipes={this.state.recipes}
          userId={this.state.userId}
        /> 
        <AddRecipe
          recipes={this.state.recipes}
          getUserId={this.getUserId}
        />
        {/* <Route 
          path="/my-recipes"
          render={(props) => (
            <MyRecipes 
              {...props} 
              recipes={this.state.recipes} 
              userId={this.state.userId}
              title="helloworld"
            />
          )}
        /> */}
        {/* <Route
          path="/add-recipe"
          render={(props) => (
            <AddRecipe
              {...props}
              recipes={this.state.recipes}
              getUserId={this.getUserId}
            />
          )}
        /> */}
      </div>
    )
  }
}

export default requiresAuth(RecipesHome);