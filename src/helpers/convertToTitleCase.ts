/**
 * Converts a sentence into title case - ie capitalise the first letter of each word.
 * @param value The string to transform
 * @returns The string in title case.
 */
const convertToTitleCase = (value: string): string => {
  // Split into separate words
  const words = value.split(' ')

  // Capitalise the first letter of each word and then join them with a space again
  return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export default convertToTitleCase
