const convertToTitleCase = (value: string): string => {
  // Split into separate words
  const words = value.split(' ')

  // Capitalise the first letter of each word and then join them with a space again
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export default convertToTitleCase