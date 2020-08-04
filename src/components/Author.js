import React from 'react'

/*Finally Ingredient gives it's instructions for rendering,
what is returned is then wrapped in JSX syntax by IngredientsList
component*/

export default function Author({name}) {
  return (
    <>
      <span>{name}</span>
    </>
  )
}
