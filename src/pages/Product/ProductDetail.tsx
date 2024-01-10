import { useParams } from "react-router-dom"
import StarRating from "@/components/misc/StarRating";
import useProducts from "@/hooks/useProducts"

const ProductDetail = () => {
  const { id } = useParams()
  const { error, loading, products } = useProducts()

  const foundProduct = products.find(product => product.id === Number(id))

  const {
    category,
    description,
    image,
    price,
    title,
    rating: { rate = 0, count = 0 } = {}
  } = foundProduct || {}

  const toRender = (
    <div className='grid items-center grid-cols-2 gap-x-4'>
      <img src={image} alt={title} className='w-full max-w-80' />
      <div className='flex flex-col gap-y-4'>
        <h4 className='text-lg uppercase'>
          {category}
        </h4>
        <h1 className='text-6xl'>
          {title}
        </h1>
        <div className='flex items-center gap-x-1'>
          <span> {rate} </span>
          <StarRating rating={rate} />
          <span> ({count})</span>
        </div>
        <span className='my-2 text-4xl'> ${price} </span>
        <p> {description} </p>
      </div>
    </div>
  )

  return (
    <div className='w-4/5 py-8 mx-auto min-h-[80dvh]'>
      {error && <div> Error </div>}
      {loading && <div> loading </div>}
      {!foundProduct && !loading && (
        <div>Product not found!</div>
      )}
      {(foundProduct && !loading) && toRender}
    </div>
  )
}

export default ProductDetail