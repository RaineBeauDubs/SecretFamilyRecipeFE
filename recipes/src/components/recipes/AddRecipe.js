import React from 'react';
import axios from 'axios';

const token = localStorage.getItem('token');
const reqOps = {
  headers: {
    authorization: token
  }
};


class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      source: '',
      ingredients: '',
      instructions: '',
      category: '',
      user_id: '',
      isActive: true
    }
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  toggleClassName = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  addNewRecipe = () => {
    const recipe = {
      title: this.state.title,
      source: this.state.source,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions,
      category: this.state.category,
      user_id: this.props.getUserId(token)
    };
    axios
      .post('http://localhost:5000/api/recipes', recipe, reqOps)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render() {
    const isActive = this.state.isActive;
    return (
      <div>
      <button className='fadeBttn' onClick={() => this.toggleClassName()}>Add a New Recipe!</button>
        <form className={isActive ? "updateClose" : "updateOpen"} onSubmit={this.addNewRecipe}>
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
          <button className='fadeBttn' type='submit'>Add recipe!</button>
        </form>
      </div>
    )
  }
}

export default AddRecipe;