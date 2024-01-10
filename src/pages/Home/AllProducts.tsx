import { useEffect, useState } from 'react'
import { useAppSelector } from '@/hooks/reduxHooks'
import { ProductsSelector } from '@/features/products/productsSlice'
import type { ProductsType } from '@/features/products/productsSlice'
import ProductCard from '@/components/misc/ProductCard'

const AllProducts = () => {
  const fetchedProducts = useAppSelector(ProductsSelector)

  const [products, setProducts] = useState<Array<ProductsType>>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  useEffect(() => {
    setLoading(fetchedProducts.loading)
    setProducts(fetchedProducts.products)
    setError(fetchedProducts.error)
  }, [fetchedProducts])

  return (
    <div className='flex flex-col mx-auto gap-y-8 w-container'>
      <h2 className='text-3xl font-semibold uppercase'> All Products </h2>
      {loading && <div> Loading... </div>}
      {error && <div> Found an error </div>}
      <div className='grid grid-cols-products-grid gap-7'>
        {products?.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  )
}

export default AllProducts