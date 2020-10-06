import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import RecipesHome from './components/recipes/RecepiesHome';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h2>Welcome to Secret Family Recipes!</h2>
      <div>
        <Route exact path='/' component={Landing} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/recipeshome' component={RecipesHome} />
      </div>
    </div>
  );
}

export default withRouter(App);
