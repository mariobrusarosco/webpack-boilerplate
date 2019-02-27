const generateBox = (boxName, markup) => {
  return new Promise((resolve, reject) => {
    let boxContent = document.querySelector(`.${boxName}`)

    if(boxContent) {
      boxContent.innerHTML = markup
      resolve()
    }


    boxContent = document.createElement('div')
    boxContent.classList.add(boxName)
    boxContent.innerHTML = markup

    document.body.append(boxContent)
    resolve()
  })
}

export {
	generateBox
}
