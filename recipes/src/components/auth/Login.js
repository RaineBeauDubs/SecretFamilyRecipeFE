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
    const endpoint = 'http://localhost:5000/api/auth/login';

    axios
      .post(endpoint, this.state)
      .then(response => {
        localStorage.setItem('token', response.data.token)
        this.props.history.push('/recipeshome');
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h2>Log-In</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name='username'
            id='username'
            placeholder='Username:'
            value={this.state.username}
            onChange={this.handleInput}
          />
          <input
            name='password'
            id='password'
            placeholder='Password:'
            value={this.state.password}
            onChange={this.handleInput}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;