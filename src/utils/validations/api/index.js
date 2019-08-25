// Vendors
import { pathOr, pick } from 'ramda'

// Generics Validators
import { validateNumber, validateString } from '../generics'

export const businessTypeValidation = input => {
  const isValidString = !!validateString(input)
  const lowerCaseInput = isValidString ? input.toLowerCase() : false

  return lowerCaseInput
}

export const listingStatusValidation = input => {
  const isValidString = !!validateString(input)
  const lowerCaseInput = isValidString && input.toLowerCase()

  return lowerCaseInput === 'active' ? input : false
}

export const usableAreasValidation = input => {
  // ADDITIONAL LOGIC HERE...
  return validateNumber(input)
}

export const idValidation = input => {
  // ADDITIONAL LOGIC HERE...
  return validateString(input)
}

export const parkingSpacesValidation = input => {
  // ADDITIONAL LOGIC HERE...
  return validateNumber(input)
}

// export const validateBoundingBox = ({ lat, lon }) => {
//   const minlon = -46.693419
//   const minlat = -23.568704
//   const maxlon = -46.641146
//   const maxlat = -23.546686

//   if((lon >= minlon && lon <= maxlon)  && (lat >= minlat && lat <= maxlat)) {
//     return true
//   }

//   return false
// }

export const coordinatesValidation = coord => {
  const parsed = !!Number(coord)

  return parsed ? coord : false
}

const validCondoFee = fee => {
  const parsedFee = Number(fee)

  return !!parsedFee && parsedFee
}

/// AND SO ON...
