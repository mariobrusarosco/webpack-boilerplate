const generateBox = (boxName, markup) => {
  
    let boxContent = document.querySelector(`.${boxName}`) 

    if(boxContent) {
      boxContent.insertAdjacentHTML('beforeend', markup)
      return Promise.resolve() 
    }
    
    
    boxContent = document.createElement('div')
    boxContent.classList.add(boxName)
    boxContent.innerHTML = markup

    document.body.append(boxContent)
    return Promise.resolve() 
}

export {
	generateBox
}
