import React from 'react'
import Ingredient from './Ingredient'

/*Another way of writing the component, with definitions
outside of return, then inserted as variable*/
export default function ingredientList({ ingredients })
{
  const ingredientElements = ingredients.map
  (ingredient => {
    return <Ingredient key = {ingredient.id}
    {...ingredient} />
  })

  return (
    <div className="ingredient-grid">
      {ingredientElements}
    </div>
  )
}

/*
export default function ingredientList({ ingredients }) {
  return (
    <div className="ingredient-grid">
      {
        ingredients.map(ingredient => {
          return (
            <Ingredient
              key = {ingredient.id}
              {...ingredient}
            />
          )
        })
      }
    </div>
  )
}*/
