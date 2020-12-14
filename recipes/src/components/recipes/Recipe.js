import React from 'react';
import axios from 'axios';

import UpdateRecipe from './UpdateRecipe';

const token = localStorage.getItem('token');
const reqOps = {
  headers: {
    authorization: token
  }
};

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      ingredientsList: [],
      instructionsList: []
    }
  }

  componentDidMount() {
    // const commaSplit = /:\s|,\s/;
    if (this.state.ingredientsList.length === 0) {
      // this.state.ingredientsList.push(this.props.ingredients.split(commaSplit))
      this.setState({
        ingredientsList: this.props.ingredients.split(',')
        })
      console.log("ingredientsList" + this.state.ingredientsList)

    }
  }

  deleteRecipe() {
    axios
      .delete(`http://localhost:5000/api/recipes/${this.props.id}`, reqOps)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  toggleClassName = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    const isActive = this.state.isActive;
    console.log(this.props.ingredients);
    // const ingredientsList = [(`${this.props.ingredients}`.split(','))];
    return (
      <div className='recipeCard'>
        <h2 className='recTitle'>{this.props.title}</h2>
        <div className='recSec'>
          <p className='recSecLeft'>Ingredients:</p>
          {this.state.ingredientsList.map(ingr => {
            return (
              <p className='ingr'>{ingr}</p>
            )
          })}
        </div>
        <div className='recSec'>
          <p className='recSecLeft'>Instructions:</p>
          <p className='recSecRight'>{this.props.instructions}</p>
        </div>
        <div className='recSec'>
          <h3 className='recSecLeft'>Source:</h3>
          <h3 className='recSecRight'>{this.props.source}</h3>
        </div>
        <div className='recSec'>
          <h3 className='recSecLeft'>Category:</h3>
          <h3 className='recSecRight'>{this.props.category}</h3>
        </div>
        {this.props.userId == this.props.recUserId &&
          <div>
            <button className='fadeBttn' onClick={() => this.deleteRecipe()}>Delete</button>
            <button className='fadeBttn' onClick={() => this.toggleClassName()}>Update Recipe</button>
          </div>
        }
        <div className={isActive ? "updateClose" : "updateOpen"}>
          <UpdateRecipe
            recipe={this.props.recipe}
            id={this.props.id}
            title={this.props.title}
            source={this.props.source}
            ingredients={this.props.ingredients}
            instructions={this.props.instructions}
            category={this.props.category}
            userId={this.props.user_id}
          />
        </div>
      </div>
    )
  }

}

export default Recipe;