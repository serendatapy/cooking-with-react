import React, { Component } from 'react'

//React allows us to write JSX, Component allows us to create a class

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: props.initialCount
    }
  }

  render() {
    return (
      <>
        <div>
          <button onClick={()=> this.changeCount(-1)}>-</button>
          <span>{this.state.count}</span>
          <button onClick={()=> this.changeCount(+1)}>+</button>
        </div>
      </>
    )
  }

  changeCount(amount) {
    this.setState(prevState => {
      return {count: this.state.count + amount }
    })
    //this.setState({ count: this.state.count + amount })
  }
}
  /*Every single class compoment has a THIS.SETSTATE, which takes an object
    and the object is going to be added in to the constructor's this.state
    by using Object.assign behind the scenes. This overwrites ONLY keys passed in

    However this.setState is an asynchronous function, so if we're
    changing the same thing twice in 1 call, it won't be done
    sequentially.

    To make sure we have a sequential change, we use PREVSTATE function
    The function version makes sure we're using the previous state
    If we don't need the previous state, say we want to reset the counter
    then the non function version is fine.
    */
