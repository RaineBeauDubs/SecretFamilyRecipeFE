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
        
      </div>
    )
  }
}

export default AddStory;