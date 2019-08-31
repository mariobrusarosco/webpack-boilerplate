const paginate = ({ array, perPage, resultStructureAs = 'object' }) => {
  const numberOfPages = Math.ceil(array.length / perPage)
  let result = resultStructureAs === 'array' ? [] : {}

  for (
    let startPoint = 0, page = 1;
    startPoint < numberOfPages * perPage;
    startPoint += perPage, page++
  ) {
    const endPoint = startPoint + perPage

    if (resultStructureAs === 'array') {
      result = [
        ...result,
        {
          page,
          items: array.slice(startPoint, endPoint)
        }
      ]
    } else {
      result = {
        ...result,
        [page]: array.slice(startPoint, endPoint)
      }
    }
  }

  return result
}

export default paginate
