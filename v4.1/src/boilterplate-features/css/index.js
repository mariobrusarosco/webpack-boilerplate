import './css-support.css'

const markup = `
  <div class="box">
    <h2>CSS Support</h2>
    <h3 class="text-styled">This text must be on blue</h3>
  </div>
`

const container = document.createElement('div')
  container.classList.add('css-support')
  container.innerHTML = markup

document.body.append(container)