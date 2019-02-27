import { generateBox } from '../utils'

const markup = `
  <div class='box'>
    <h3>Async Await</h3>
		<button type='button' class='async-await-btn'>Start an Async / Await flow</button>
	</div>
`

// const insertText = (text, DOMElement) => {
//   const wrapper = document.querySelector('.async-await-support')
//     wrapper.classList.add('wrapper')


//   const p = documen.createElement('p')
//     p.textContent = text

//   DOMElement.appendChild(p)
// }

// insertText(`Science Bitch!`, markup)
// insertText(`I'm the one who knocks!`, markup)
// insertText(`Yes Mr. White!`, markup)
// insertText(`Your're god damn right!`, markup)


generateBox('async-await-support', markup)
