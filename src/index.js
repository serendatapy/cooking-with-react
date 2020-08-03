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
*/
