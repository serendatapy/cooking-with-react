import React from 'react';
import Counter from './Counter'
import CounterHooks from './CounterHooks'

function App() {
  return (
    <>
    Counter
    <Counter initialCount={0}/>
    Counter Hooks
    <CounterHooks initialCount={0}/>
    </>
  )
}

export default App;

/*In react you can just put the HTML inside javascript
without having to inject it in any special way

The ( ) after the return allows us to indent the code

<></> Are JSX fragments, which allow us to return
multiple HTML elements as 1, which is what we're allowed to do

JSX is a little different from HTML. For example with the keyword
class, we need to use className, as Class is a reserved word in JS.

Another difference, ALL tags have to be Self closed <input />
or closed on purpose <input></input> even when HTML doesn't usually
require it.

Thanks to react, it's not necessary to do all the javascript calls
such as getElementById().etc. You can have dynamic HTML off the bat!
*/