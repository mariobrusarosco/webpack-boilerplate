// Vendors
import { pathOr } from 'ramda'

const getCoordinates = property => {
  const location = pathOr({}, ['address', 'geoLocation', 'location'], property)
  const lat = pathOr(false, ['lat'], location)
  const lon = pathOr(false, ['lon'], location)

  return { lon, lat }
}

export default getCoordinates
