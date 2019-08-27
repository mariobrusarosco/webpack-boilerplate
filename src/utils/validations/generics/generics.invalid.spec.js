import { validateNumber, validateString } from './index'

// const valuesToTestANumber = [null, undefined, false, '', '   ', '100a00', 0, '0', '00000', NaN, ]
const falsyValues = [
  {},
  [],
  null,
  undefined,
  false,
  NaN,
  '',
  '  ',
  'null',
  'NULL',
  'undefined',
  'UNDEFINED',
  'false',
  'FALSE',
  'NaN',
  'NAN'
]

const falsyNumbers = ['76a21', 'a7621', '7621a']

describe(`VALIDATIONS OF SOME JAVASCRIPT'S DATA TYPES`, () => {
  it(`Must receive invalid inputs, try to convert them to valid a [Number] and return 'false'`, () => {
    ;[...falsyValues, ...falsyNumbers].forEach(input => {
      const result = validateNumber(input)

      expect(result).not.toBeTruthy()
    })
  })
})

describe(`VALIDATIONS OF STRINGS`, () => {
  it(`Must receive invalid inputs, try to convert them to valid a [Number]  and return 'false'`, () => {
    ;[...falsyValues].forEach(input => {
      const result = validateString(input)

      expect(result).not.toBeTruthy()
    })
  })
})
