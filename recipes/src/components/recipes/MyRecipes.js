import React from 'react';

import Recipe from './Recipe';


const MyRecipes = ({recipes, userId}) => {
  return (
    <div>
      {recipes.map(recipe => {
        if (recipe.user_id == userId || recipe.private == 'false') {
          return (
            <div>
              <Recipe
                userId={userId}
                recipe={recipe}
                id={recipe.id}
                key={recipe.id}
                title={recipe.title}
                source={recipe.source}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}
                category={recipe.category}
                recUserId={recipe.user_id}
              />
            </div>
          )
        }
      })}
    </div>
  )
}

export default MyRecipes;