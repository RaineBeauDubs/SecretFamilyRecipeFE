import React from 'react';

import Recipe from './Recipe';


class MyRecipes extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   recipes: this.props.recipes,
    //   userId: this.props.userId
    // }
  }

  render() {
    return (
      <div className='recipeHomeCont'>
        <h2>Hello</h2>
        {this.props.recipes.map(recipe => {
          if (recipe.user_id === this.props.userId) {
            return (
              <div>
                <Recipe
                  recipe={recipe}
                  id={recipe.id}
                  key={recipe.id}
                  title={recipe.title}
                  source={recipe.source}
                  ingredients={recipe.ingredients}
                  instructions={recipe.instructions}
                  category={recipe.category}
                  userId={recipe.user_id}
                />
              </div>
            )
          }
        })}
      </div>
    )
  }
}

export default MyRecipes;