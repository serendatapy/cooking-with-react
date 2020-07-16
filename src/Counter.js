import React, { Component } from 'react'
import {ThemeContext} from './App'

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
      <ThemeContext.Consumer>
        {style => (

          <div>
            <button style = {style} onClick={() => this.changeCount(-1)}>-</button>
            <span>{this.state.count}</span>
            <button style = {style} onClick={() => this.changeCount(+1)}>+</button>
          </div>
        )}



      </ThemeContext.Consumer>

    )
  }

  changeCount(amount) {
    this.setState(prevState => {
      return { count: this.state.count + amount }
    })
    //this.setState({ count: this.state.count + amount })
  }
}
  /*
  ThemeContext needs to be imported with { } because it isn't a default export

  ThemeContext needs to have a function in it, within which our JSX will be rendered.

  The function has parenthesis instead of curly brackets, because the parenthesis tell
  the code to return back to the function

  Once setup, we have access to the style variable in all the code, it works like this
  1. Style(css) is set to {style} value, which is the default we put in useState
  2. When the button is pressed in App.js, it uses setTheme to change the style
  and this style is then propagated in all compoments that consume it.

  */
