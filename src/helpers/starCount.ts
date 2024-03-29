/**
 * Converts a star rating into the number of whole and partial stars.
 * @param rating The star rating value
 * @returns The number of whole, half and empty stars to render.
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
    half: halfStars,
    empty: 5 - (wholeStars + halfStars),
  }
}

export default starCount
