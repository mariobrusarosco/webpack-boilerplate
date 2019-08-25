export const validateBoundingBox = ({ lat, lon }) => {
  if (lon >= -46.693419 && lon <= -46.641146) {
    // console.log('in', lon)
    // valid.push(property)
  } else {
    console.log('out', lon)
  }

  return false
}
