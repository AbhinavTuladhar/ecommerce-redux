import { useParams } from 'react-router-dom'
import StarRating from '@/components/misc/StarRating'
import useProducts from '@/hooks/useProducts'
import AddToCartButton from '@/components/misc/AddToCartButton'

const ProductDetail = () => {
  const { id } = useParams()
  const { error, loading, products } = useProducts()

  const foundProduct = products.find((product) => product.id === Number(id))

  const { category, description, image, price, title, rating: { rate = 0, count = 0 } = {} } = foundProduct || {}

  const toRender = (
    <div className="flex flex-col items-center gap-x-10 gap-y-10 md:grid md:grid-cols-2">
      <img src={image} alt={title} className="w-full max-w-80 justify-self-center" />
      <div className="flex flex-col gap-y-4">
        <h4 className="uppercase fluid-text-lg">{category}</h4>

        <h2 className="fluid-text-4xl">{title}</h2>

        <div className="flex items-center gap-x-1">
          <span> {rate} </span>
          <StarRating rating={rate} />
          <span className="underline"> ({count} customer reviews)</span>
        </div>

        <span className="my-2 fluid-text-3xl"> ${price} </span>

        <p> {description} </p>

        {/* For some buttons */}
        <div>
          <AddToCartButton id={Number(id)} />
        </div>
      </div>
    </div>
  )

  return (
    <div className="mx-auto min-h-[80dvh] w-4/5 py-8">
      {error && <div> Error </div>}
      {loading && <div> loading </div>}
      {!foundProduct && !loading && <div>Product not found!</div>}
      {foundProduct && !loading && toRender}
    </div>
  )
}

export default ProductDetail
