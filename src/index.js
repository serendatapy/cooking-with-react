import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*<App /> Refers to the App.js component, and it renders in root
which is in the index.html

Functional components render whatever is returned
*/
