const paginate = ({ array, itemsPerPage, resultStructureAs = 'array' }) => {
  const numberOfPages = Math.ceil(array.length / itemsPerPage)

  let result = resultStructureAs === 'array' ? [] : {}

  for (
    let startPoint = 0, page = 1;
    startPoint < numberOfPages * itemsPerPage;
    startPoint += itemsPerPage, page++
  ) {
    const endPoint = startPoint + itemsPerPage

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

  return {
    all: array,
    pagination: result
  }
}

export default paginate
