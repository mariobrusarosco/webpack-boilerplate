import React, { Component } from 'react'
import { render } from 'react-dom'

console.log('react')

const container = document.createElement('div')
	container.setAttribute('id', 'app')

document.body.appendChild(container)

class App extends Component {
	render() {
		return (
			<div>
				React
			</div>
		)
	}
}

render(<App />, document.querySelector('#app'))



