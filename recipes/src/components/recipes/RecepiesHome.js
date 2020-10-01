import axios from 'axios';
import React from 'react';
import requiresAuth from '../auth/requiresAuth';

class RecipesHome extends React.Component {
  state = {
    recipes = []
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
      </div>
    )
  }
}

export default requiresAuth(RecipesHome);