import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const endpoint = 'http://localhost:5000/api/login'

    axios
      .post(endpoint, this.state)
      .then(response => {
        localStorage.setItem('token', response.data.token)
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>

      </div>
    )
  }

}

export default Login;