// Vendors
import { pathOr } from 'ramda'

// Safe accessing some props related to 'price'
// ... and using ramda to default the one which doesn't exist to 'undefined'
const getPricingInfos = property => {
  return pathOr({}, ['pricingInfos'], property)
}

export default getPricingInfos
