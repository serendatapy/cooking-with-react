import React from 'react'

export default function Recipe(props) {
  const {
    name,
    cookTime,
    servings,
    instructions
  } = props;

  return (
    <div>
      <div>
        <h3>{name}</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook Time:</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>
          {instructions}
        </div>
      </div>

    </div>
  )
}
/*
When we import the prop, we're able to use
object destructuring to catch everything we need using
the specific names of the properties in the object
*/
