import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.request.use(
  function (options) {
    options.headers.authorization = localStorage.getItem('token');
    return options;
  },
  function (error) {
    return Promise.reject(error)
  }
);

class Authenticate extends React.Component {
  render() {
    const token = localStorage.getItem('token');
    const notLoggedIn = <p>Not Logged In</p>;
    return (
      <>
      {token ? <Component {...this.props} /> : notLoggedIn}
      </>
    )
  }
}

export default Authenticate(Component);