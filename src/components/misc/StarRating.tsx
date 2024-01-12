import { FC } from 'react'
import { FaStar } from 'react-icons/fa'
import { FaStarHalfAlt } from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'

import starCount from '@/helpers/starCount'

interface Props {
  rating: number
}

const StarRating: FC<Props> = ({ rating }) => {
  const { whole, half, empty } = starCount(rating)

  const iconClassName = ' w-4 h-4 text-yellow-500'

  return (
    <div className="flex gap-x-0.5">
      {Array(whole)
        .fill(0)
        .map((_, index) => (
          <FaStar className={iconClassName} key={index} />
        ))}
      {half > 0 && <FaStarHalfAlt className={iconClassName} />}
      {empty > 0 &&
        Array(empty)
          .fill(0)
          .map((_, index) => <FaRegStar className={iconClassName} key={index} />)}
    </div>
  )
}

export default StarRating
