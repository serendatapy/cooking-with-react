This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### How the program works
The application is stuctured in the following way:

1. index.js - it's only purpose to to pass App.js for rendering

2. App.js -
   * Contains default recipe placeholder data

   * Connects everything, app.css, RecipeList & RecipeEdit

   * Creates a context to allow easy passing of functions

   * Creates local storage to persist changes

   * Has a useState- to allow deleting and adding objects.
This is defined here so that both RecipeEdit and RecipeList
have access to the state.
All useStates have
const [variable,funcChangeState] = useState(defaultState);
'recipes' state will allow us to add,delete & persist changes
'selectedRecipe' state will allows us to dynamically update information

   * Uses useEffect - activates everytime the dependency changes.
In this case we have 2 use effects
A.Then to persist the change, useEffect loads local storage ([] once on load)
B.every time recipe changes, it makes the change to local storage.
Note: Stringified because local storage only supports strings

THEME: we create an object recipeContextValue
containing what we want to make available throughout our context
(this object uses shorthand notation).

React doesn't allow you to change state directly, which is why
we're using const, so to do it we need to create a duplicates, modify
then set old state to new state.

functions:
   - handleRecipeSelect - just for consistent naming
   - handleRecipeAdd - adds new recipe to recipe array and sets the state
   - handleRecipeChange - changes old recipe for new recipe
   - handleRecipeDelete - removes selected recipe

Return:
THEME: RecipeContext allows all components and their children within
to access the recipeContextValue object as 'value' if needed. Furthermore,
Pass 'recipes' to RecipeList
Pass 'recipe' to RecipeEdit if recipe is selected.(hiding effect)

   * DEFAULT PLACEHOLDER DATA:
uses uuid to generate unique IDs for each recipe


3.1 RecipeList -
Takes all recipes form App, and then passes them destructured one by one to Recipe in JSX format, assigning a key (necessary when using arrays). Thanks to context is able to access handleRecipeAdd function from App.
Note: We don't need a contextConsumer because the {useContext} hook
takes care of it.

3.2 Recipe - starts to give the layout of the recipe in JSX,
breaking up the recipe object into a layout. It then passes the
ingredients object to IngredientList component

3.3 IngredientList - IngredientList further breaks up the ingredients object passing each one to the Ingredient component

3.4 Ingredient - each ingredient is layed out as indicated, wrapped in JSX when returned back up

4. RecipeEdit - displays all fields to allow editing, also connects
to recipeIngredientEdit
   * takes 'recipe' as a prop from App, and takes values from there to populate fields.
   * takes in 2 functions from the context

Functions:

   * handleChange - calls imported handleRecipeChange, with values from changes.
Basically, whenever we change a value in the fields, this function will
     - take in the changes array
     - create a new object - instead of directly editing recipe.
    The double spread operator basically inserts all of first array's content
    into the new object, then spreads all of second array's content,
    overwriting all properties that are the same. Effectively
    we'll see just things that have changed if both have same properties.
    this function allows for the dynamic editing.
All functions refer in the end to this one, as it is the one that in the parent
calls handleRecipeChange, that makes the state change.

   * handleIngredientChange - this does something similar to handle change,
but for ingredients.

   * handleIngredientAdd/delete - creates new/deletes ingredients

RecipeEdit JSX layout + calls RecipeIngredientEdit


4.1 RecipeIngredientEdit takes in and lays out in JSX ingredients from RecipeEdit

Use effect can also be used to CLEAN UP, i.e if you want to disconnect from
  an API

  in this case onLoad the first console will be printed. If I remove  or add
  a recipe however the console in the return statement will be run first.
  This is because we want to make sure we clean up. You call a function so that after
  the rendering you unmount from the component.

  After useEffect is called once, the subsequent times it's called, automatically
  the returns are being called, as they serve some cleanup purpose.
  For example if the use effect sets a listener, with the return
  statement we can remove it. It sets a clean slate
  for the use effect to be called on.

  useEffect(()=> {
    console.log('Render')
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
    return () => console.log('recipes set')
  }, [recipes])

  #### BEST PRACTICES:
  * Put components into seperate files, much easier to work with

  * Use 'export default' as the actualy component we're creating.
  Makes it much clearer when importing, and also to rename is necessary

  * Make sure you group all states functions and useEffects together at the top,
  makes it easier to find. Put functions just before the return of the component.

  * Break appart all components into smallest components possible. Much easier to debug.
  extention - could also put input into components. if it's just too hard or
  you'll use just once, you may not break out.

  * use consistent naming, for example handle leads to some click event. That helps
  to identify their purpose.

  * when you have long elements, break them up into multiple lines

  * When it's best to use props, and when context? Generally Props better for 1 level pass.
  Context better when passing multiple levels.

  * Could have combined states into a single state, however separating them makes it much
  easier to understand. So break out state in as many smaller states as is logical.
  SEPARATION OF CONCERNS.

  * Imutability - change only through setState calls.

  * Store Ids instead of the object: Instead of storing selected recipe, we
  store the id to it. This will allow us to reference it from the array.
  If we stored the selected recipe instead of it's id, we'd have 2 references
  to the same variable. These could go out of sync and produce bugs. Always store
  id if you can reference it from other objects you have, makes it more consistent.

  #### Extention Ideas by Level:
  1. Add a search box at top of recipe list, whatever you type in, it filters
  through list of recipes, and shows only what matches search term. For example
  by typing 'ch' it will show chicken and not pork.

  2. Add another section to RecipeEditList and display, which will show who created
  the recipe.
  then add top or bottom of recipeEdit section, who created the recipe,
  it'll give you the option to add multiple people. You'll need an add button, input
  and label, and will need to be added to the recipe. (hint: very similar to ingredient)

  3. Create Backend: instead of storing in local storage, use an api so that it will
  be stored in a database. The only things that will change are the useEffects.
