import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList'
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';
/*
The use of Context is aimed specically at tackling the 'prop drilling' through
many levels of component hierachy, since those components don't need the props.

All the css files are connected to this one through imports (react style)
so there is only need to import this one

App.js imports RecipeList and then returns it after passing it default state (to be rendered by index.js)

tip: using handle infront of button functions as a reminder that the function
handles on click events on the buttons.
*/

/*To avoid passing down useless props, we can use Context*/
export const RecipeContext = React.createContext()
/*tip: by naming it in this way, you can find it easier in devtools*/
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

function App() {
  /*Create a state with a method to update - set default to sample*/
  const [recipes, setRecipes] = useState (sampleRecipes)

  /*UseEffect(function,dependencies) will update itself each time the
  dependency changes. The dependency is whatever is passed as the second argument.
  It's very similar to a conditional. When this component changes, do this function.
  Important: The order of useEffects is important.*/

  //this useEffect GETS recipes from local storage if it's not empty, just on load
  useEffect(()=>{
    /*This use effect is going to be run once ([]) to load local storage*/
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  /*This useEffect SETS the information in local storage*/
  useEffect(()=> {
    /*this is stringified because local storage only supports strings*/
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  /*Use effect can also be used to CLEAN UP, i.e if you want to disconnect from
  an API

  in this case onLoad the first console will be printed. If I remove  or add
  a recipe however the console in the return statement will be run first.
  This is because we want to make sure we clean up. You call a function so that after
  the rendering you unmount from the component.

  every time we delete a component all returns are being called from our useEffects
  to clean up. For example if the use effect sets a listener, with the return
  statement we can remove it.
  But not only when a component gets deleted. It's called every time after the
  the first time, to make sure we clean up before we reinstate the useEffect.

  useEffect(()=> {
    console.log('Render')
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
    return () => console.log('recipes set')
  }, [recipes])
  */



  /*we create an object containing what we want
   to make available through our context
   (this object uses shorthand notation)*/
   const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }

  /*2 functions to ADD and DELETE recipes*/
  function handleRecipeAdd(){
    const newRecipe = {
      //id: Date.now().toString()
      id: uuidv4(),
      name: 'New',
      servings: '1',
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [{
          id: uuidv4(),
          name: 'Name',
          amount: '1 Tbs'}
        ]
    }
    /*Set the new state to re-render*/
    setRecipes([...recipes, newRecipe]) //previous state + recipe to add
  }

  function handleRecipeDelete(id){
    /*Set the new state to re-render*/
    setRecipes(recipes.filter(recipe => recipe.id !== id)) //return all recipes minus one with selected id
  }

  /*Finally we pass our object to the context, and wrap
  our component in it, in this way, that component and all children
  could, if needed, have access to it. This allows us to avoid prop drilling, and to
  access the props we need, only where needed*/

  return (
    <RecipeContext.Provider value= {recipeContextValue}>
      <RecipeList recipes = {recipes}/>
    </RecipeContext.Provider>

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