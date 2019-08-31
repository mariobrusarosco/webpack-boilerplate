import { validateNumber, validateString } from '../index'

import { validNumbers, validStrings } from './fixtures'

describe(`VALIDATIONS OF SOME JAVASCRIPT'S DATA TYPES`, () => {
  it(`Must receive valid inputs, try to convert them to valid a [Number] return the input itseld`, () => {
    validNumbers.forEach(input => {
      const result = validateNumber(input)

      expect(result).toBeTruthy()
    })
  })
})

describe(`VALIDATIONS OF STRINGS`, () => {
  it(`Must receive valid inputs, try to convert them to valid a [Number] return the input itself`, () => {
    validStrings.forEach(input => {
      const result = validateString(input)

      expect(result).toBeTruthy()
    })
  })
})
