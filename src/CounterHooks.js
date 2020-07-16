import React, {useState} from 'react'

export default function CounterHooks(/*props*/{initialCount}) {

  const [count, setState] = useState(initialCount)
  //const [count, setState] = useState(initialCount)
  /*Potentially could have as many lines as arguments passed, breaking up the assignment and state updates*/

  return (
    <div>
          <button onClick ={ ()=> setState(prevCount => prevCount - 1)}>-</button>
          <span>{/*props.initialCount*/count}</span>
          <button onClick = {()=> setState(prevCount =>prevCount+ 1)}>+</button>
    </div>
  )
}

/* state as an object
return (
  <div>
        <button onClick ={
          ()=> setState(prevState => {
             return {count: state.count - 1}
            })}>-</button>
        <span>{state.count}</span>
        <button onClick = {()=> setState(prevState => {
             return {count: state.count + 1}
            })}>+</button>
  </div>
)*/

/*With functional compoments, we have all passed in variables in
props object, and we can use object deconstruction to get at them
individually if necessary

Since functional Components CAN'T have states, we call in useState
function as a hook, to allow us to have state functionality.

useState function takes in our initial state, in this case
{count: initialCount} returns our state as an array

Deconstructing the array, we have 2 values
Our state as assigned, in this case its {count: initialCount}
A function to change that state
These variables however, could have any other name

useState is really very similar to the constructor this.state =

Hooks really can use ANY kind of data as a state, so instead of using
an object, we can just use the direct value (in this case the number)





*/