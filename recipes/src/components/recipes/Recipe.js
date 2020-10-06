import React from 'react';

const Recipe = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.source}</h3>
      <p>{props.ingredients}</p>
      <p>{props.instructions}</p>
      <p>{props.category}</p>
    </div>
  )
}

export default Recipe;