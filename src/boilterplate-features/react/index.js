import React, { Component } from 'react'
import { render } from 'react-dom'

console.log('react')

const container = document.createElement('div')
	container.setAttribute('id', 'app')

document.body.appendChild(container)

class App extends Component {
	render() {
		return (
			<div className="box">
        <h2>React Support</h2>
				<p>Made with React with a class component</p>
			</div>
		)
	}
}

render(<App />, document.querySelector('.app'))



