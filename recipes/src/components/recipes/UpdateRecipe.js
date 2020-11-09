import React from 'react';

class UpdateRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      source: this.props.source,
      ingredients: this.props.ingredients,
      instructions: this.props.instructions,
      category: this.props.category,
      user_id: this.props.user_id
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
      <form onSubmit={this.addNewRecipe}>
          <input
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='source'
            value={this.state.source}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='ingredients'
            value={this.state.ingredients}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='instructions'
            value={this.state.instructions}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='category'
            value={this.state.category}
            onChange={this.handleChange}
          />
          <button type='submit'>Add recipe!</button>
        </form>
      </div>
    )
  }
}

export default UpdateRecipe;