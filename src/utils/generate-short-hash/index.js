const generateShortHash = () => {
  return Math.random()
    .toString(16)
    .substring(2)
  // console.log('sdsadsadasdas')
}

export default generateShortHash
