import React from 'react'
import Recipe from './Recipe'

export default function ReceipeList({ recipes }) {
  return (
    <div className="recipe-list">
    <div>
      {
        recipes.map(recipe => {
          return (
          <Recipe
            key={recipe.id}
            {...recipe}
          />
          )
        })
      }
    </div>
    <div className="recipe-list__add-recipe-btn-container">
      <button className="btn btn--primary">Add a recipe</button>
    </div>

    </div>
  )
}

/*
Using the Spread operator passes all the values individually

The recipes.map what it does is;
1.for every recipe return a new array with JSX for rendering
-But really it is telling JS to render each component
as instructed in Recipe

Every time you return an array of results you need to add a key.
With the keys, react knows what to re-render,
so it doesn't re-render all the components only the ones updated.
*/