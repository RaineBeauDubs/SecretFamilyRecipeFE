import React from 'react';
import axios from 'axios';

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
      <div>
        <div>
        <h2>{this.props.title}</h2>
        <button onClick={() => this.deleteRecepe()}>Delete</button>
        </div>
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