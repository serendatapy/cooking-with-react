import React from 'react'
import Ingredient from './Ingredient'


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
    <div>
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

/*This component iterates through each ingredient element
and renders it as indicated in Ingredient*/
