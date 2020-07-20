import React, { useState } from 'react';
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext();
//consumer = provider

function App() {
  const [theme, setTheme] = useState('green')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
    Counter
    <Counter initialCount={0}/>
    Counter Hooks
    <CounterHooks initialCount={0}/>
    <button onClick = {()=> setTheme(prevTheme => {
      return prevTheme === 'red' ? 'blue' : 'red'})}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;

/*
Themes are a way of setting global variables, something that CAN'T
be done in react!

This way, all components within a theme, however deeply nested,
will have access to those variables.

Everything within ThemeContext will have access to values provided
*/