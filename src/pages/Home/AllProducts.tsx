import ProductGrid from '@/components/misc/ProductGrid'
import useProducts from '@/hooks/useProducts'

const AllProducts = () => {
  const productState = useProducts()

  const { error, loading, products } = productState

  // Shuffle the array and then send only six items.
  const randomProducts = products
    .map((value) => ({ value, sortKey: Math.random() }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .map(({ value }) => value)
    .slice(0, 6)

  const newState = {
    error,
    loading,
    products: randomProducts,
  }

  return (
    <section className="mx-auto flex w-container flex-col gap-y-8 pb-8">
      <h2 className="font-semibold uppercase fluid-text-3xl"> Newest Products! </h2>
      <ProductGrid productsState={productState} />
    </section>
  )
}

export default AllProducts
