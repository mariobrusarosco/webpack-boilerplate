import { validateNumber, validateString } from './index'

const validNumbers = [76000, '  76', '76  ', '7 6']
const validStrings = [
  'lorem',
  'LOREM',
  'lorem ipsum',
  '  lorem',
  'lorem   ',
  'lorem123ipsum',
  '1lorem2ipsum3'
]

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
