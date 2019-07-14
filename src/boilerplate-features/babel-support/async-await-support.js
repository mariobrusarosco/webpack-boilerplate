const insertText = text => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const wrapper = document.querySelector('.async-await-wrapper')

       const p = document.createElement('p')
         p.textContent = text

       wrapper.appendChild(p)

       resolve()
    }, 500)
  })
}

const asyncAwaitFlow = async () => {
  await insertText(`I'm the one who knocks`)
  console.log('waiting...')

  await insertText(`I'm the danger`)
  console.log('waiting...')

  await insertText(`Yeah Mr. White!`)
  console.log('waiting...')

  await insertText(`Say my name!`)
  console.log('Done!')
}

const attachAsyncAwait = async () => {
  const btn = document.querySelector('.async-await-btn')

  btn.addEventListener('click', asyncAwaitFlow)
}

const markup = `
  <h3>Async Await</h3>
    <button class='async-await-btn'>Start</button>
  <div class='async-await-wrapper'></div>
`

export {
  markup,
  attachAsyncAwait
}
