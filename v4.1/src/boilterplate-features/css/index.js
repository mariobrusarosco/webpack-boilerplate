import './css-support.css'

const container = document.createElement('div')
  container.textContent = 'CSS support. This text must be on blue'
  container.classList.add('css-support')

  document.body.appendChild(container)