import React from 'react';
import RecipeList from './RecipeList'
import '../css/app.css';
/*
All the css files are connected to this one through imports (react style)
so there is only need to import this one

App.js imports RecipeList and then returns it after passing it props (to be rendered by index.js)
*/

function App() {
  return (
    <RecipeList recipes = {sampleRecipes}/>
  )
}

/*the information about the recipes, which it
passes to the recipeList component.
An Array of Recipe objects*/

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put Salt on Chicken\n2. Put Chicken in Oven\n3. Eat Chicken',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put Paprika on pork\n2. Put Pork in Oven\n3. Eat Pork',
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
]

export default App; /*app makes itself importable*/