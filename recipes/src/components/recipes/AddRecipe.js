import React from 'react';
import axios from 'axios';

const token = localStorage.getItem('token');


// import requiresAuth from '../auth/requiresAuth';

class AddStory extends React.Component {
  state = {
    title: '',
    source: '',
    ingredients: '',
    instructions: '',
    category: '',
    user_id: 12
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addNewRecipe = (event) => {
    event.preventDefault();
    const recipe = {
      title: this.state.title,
      source: this.state.source,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions,
      category: this.state.category
    };
    axios
      .post('http://localhost:5000/api/recipes', this.state, { headers: { authorization: token } })
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h2>Add Recipe:</h2>
        <form onSubmit={this.addNewRecipe}>
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='source'
            placeholder='Source'
            value={this.state.source}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='ingredients'
            placeholder='Ingredients'
            value={this.state.ingredients}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='instructions'
            placeholder='Instructions'
            value={this.state.instructions}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='category'
            placeholder='Category'
            value={this.state.category}
            onChange={this.handleChange}
          />
          <button type='submit'>Add recipe!</button>
        </form>
      </div>
    )
  }
}

export default AddStory;