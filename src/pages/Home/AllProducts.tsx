import ProductCard from '@/components/misc/ProductCard'
import useProducts from '@/hooks/useProducts'

const AllProducts = () => {
  const { products, error, loading } = useProducts()

  return (
    <div className="mx-auto flex w-container flex-col gap-y-8 pb-8">
      <h2 className="text-3xl font-semibold uppercase"> All Products </h2>
      {loading && <div> Loading... </div>}
      {error && <div> Found an error </div>}
      <div className="grid grid-cols-products-grid gap-7">
        {products?.map((product, index) => <ProductCard product={product} key={index} />)}
      </div>
    </div>
  )
}

export default AllProducts
