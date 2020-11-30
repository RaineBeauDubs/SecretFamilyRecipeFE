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
      isActive: true
    }
  }

  deleteRecepe() {
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
    return (
      <div className='recipeCont'>
        <h2>{this.props.title}</h2>
        <div>
          <h2>Source:</h2>
          <h3>{this.props.source}</h3>
        </div>
        <div>
          <h2>Ingredients:</h2>
          <p>{this.props.ingredients}</p>
        </div>
        <div>
          <h2>Instructions:</h2>
          <p>{this.props.instructions}</p>
        </div>
        <div>
          <h2>Category:</h2>
          <p>{this.props.category}</p>
        </div>
        <div>
          <button className='fadeBttn' onClick={() => this.deleteRecepe()}>Delete</button>
          <button className='fadeBttn' onClick={() => this.toggleClassName()}>Update Recipe</button>
        </div>
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