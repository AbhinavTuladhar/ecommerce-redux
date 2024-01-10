/**
 * Converts a star rating into the number of whole and partial stars.
 * @param rating The star rating value 
 * @returns 
 */
const starCount = (rating: number) => {
  const wholePart = Math.floor(rating)
  let wholeStars = wholePart
  const decimalPart = rating - Math.floor(rating)
  let halfStars = 0

  if (decimalPart >= 0.5) {
    wholeStars++
  } else if (decimalPart > 0) {
    halfStars++
  }

  return {
    whole: wholeStars,
    half: halfStars
  }
}

export default starCount