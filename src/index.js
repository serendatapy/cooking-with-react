import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*<App /> Refers to App.js component, and it renders in the 'root' element
in the index.html through 2nd argument getElementById('root').

The application is stuctured in the following way:
1. index.js - it's only purpose to to pass App.js for rendering

2. App.js - connects everything together. Specifically the css,

RecipeList(left side) RecipeEdit(right side)

3.1 RecipeList

3.2 RecipeEdit

*/
