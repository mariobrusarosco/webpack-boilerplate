import { hot } from 'react-hot-loader'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.increment = this.increment.bind(this)
    this.state = {
      counter: 0
    }
  }

  increment () {
    this.setState(prevState => ({
      counter: ++prevState.counter
    }))
  }

  render () {
    return (
      <>
        <h1>
          [Counting]!!!!!!!!!!!: <strong>{this.state.counter}</strong>
        </h1>
        <button onClick={this.increment}>+</button>
      </>
    )
  }
}

export default hot(module)(Counter)
