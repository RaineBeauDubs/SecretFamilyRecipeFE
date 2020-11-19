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
  }

  deleteRecepe() {
    axios
      .delete(`http://localhost:5000/api/recipes/${this.props.id}`, reqOps)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className='recipeCont'>
        <div>
          <h2>{this.props.title}</h2>
          <button className='fadeBttn' onClick={() => this.deleteRecepe()}>Delete</button>
        </div>
        <h3>{this.props.source}</h3>
        <p>{this.props.ingredients}</p>
        <p>{this.props.instructions}</p>
        <p>{this.props.category}</p>
        <p>{this.props.userId}</p>

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
    )
  }

}

export default Recipe;