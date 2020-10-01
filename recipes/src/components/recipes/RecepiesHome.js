import React from 'react';
import requiresAuth from '../auth/requiresAuth';

class RecipesHome extends React.Component {
  render() {
    return (
      <div>
        <h2>You made it past auth!</h2>
      </div>
    )
  }
}

export default requiresAuth(RecipesHome);