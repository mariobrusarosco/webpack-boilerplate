export const validateNumber = input => {
  if (!input) return false

  const parsedNumber = ~~input // or Number(input)

  return !!parsedNumber ? parsedNumber : false
}

export const validateString = input => {
  if (typeof input !== 'string') return false

  const sanitized = input.replace(/\s/gim, '')
  const lowercase = sanitized && sanitized.toLowerCase()
  const trimmed = lowercase.trim()

  const isFalsyStrings = ['null', 'undefined', 'false', 'nan'].some(
    string => string === trimmed
  )

  if (isFalsyStrings || !trimmed) {
    return false
  }

  return input
}
