import { generateBox } from '../utils'

console.log(1)

const markup = `
	<div class='box'>
		<h2>Dynamic Code Splitting</h2>
		<button type='button'>Import a chunk</button>
	</div>
`
new Promise((resolve, reject) => {
	generateBox('dynamic-code-splitting-support', markup)
	resolve()
}).then(
	console.log(document.querySelector('.dynamic-code-splitting-support button'))
)
