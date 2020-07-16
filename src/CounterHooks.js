import React, {useState, useContext} from 'react'
import {ThemeContext} from './App'

export default function CounterHooks(/*props*/{initialCount}) {

  const [count, setCount] = useState(initialCount)
  const style = useContext(ThemeContext)
  //const [count, setState] = useState(initialCount)
  /*Potentially could have as many lines as arguments passed, breaking up the assignment and state updates*/

  return (
    <div>
          <button style = {style} onClick ={ ()=> setCount(prevCount => prevCount - 1)}>-</button>
          <span>{/*props.initialCount*/count}</span>
          <button style = {style} onClick = {()=> setCount(prevCount =>prevCount+ 1)}>+</button>
    </div>
  )
}


/*
For hooks it's much easier
Import ThemeContext
create a hook const style =... this gives us access to the theme
Use variable to change styles (in this case)

EASY!!

One more note: Since the counters are the children of App.js, when
the toggle theme button is pressed, not only App.js is re-rendered
but also ALL it's children.
*/