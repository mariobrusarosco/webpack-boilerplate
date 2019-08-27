import { validateNumber, validateString } from './index'

const possibleNumbers = [76000, '  76', '76  ', '7 6']

describe(`VALIDATIONS OF SOME JAVASCRIPT'S DATA TYPES`, () => {
  it(`Must receive valid inputs, try to convert them to valid a [Number] return the input itseld`, () => {
    possibleNumbers.forEach(input => {
      const result = validateNumber(input)

      expect(result).toBeTruthy()
    })
  })
})
