import React from 'react';
import axios from 'axios';

class AddStory extends React.Component {
  constructor(props) {
    this.state = {
      title: '',
      source: '',
      ingredients: '',
      instructions: '',
      category: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addNewStory = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/api/recipes', this.state)
      .then(response => {
        this.setState({
          recipes: response.data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h2>Add Recipe:</h2>
        <form onSubmit={this.addNewStory}>
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