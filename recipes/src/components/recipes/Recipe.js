import React from 'react';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h3>{this.props.source}</h3>
        <p>{this.props.ingredients}</p>
        <p>{this.props.instructions}</p>
        <p>{this.props.category}</p>
        <p>{this.props.userId}</p>
      </div>
    )
  }

}

export default Recipe;