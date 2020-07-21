import React from 'react'
import Recipe from './Recipe'

export default function ReceipeList({ recipes }) {
  return (
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
  )
}

/*
Using the Spread operator passes all the values individually

The recipes.map what it does is;
1.for every recipe return a new array with JSX for rendering

With the keys, react knows what to re-render,
so it doesn't re-render all the components at once. Every time
you return an array of results you need to add a key
*/