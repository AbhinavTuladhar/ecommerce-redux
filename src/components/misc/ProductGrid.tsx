import { FC } from 'react'
import ProductCard from '@/components/misc/ProductCard'
import type { ProductsState } from '@/features/products/productsSlice'

interface GridProps {
  productsState: ProductsState
}

const ProductGrid: FC<GridProps> = ({ productsState }) => {
  const { products, error, loading } = productsState

  return (
    <>
      {loading && <div> Loading... </div>}
      {error && <div> Found an error </div>}
      <div className="grid grid-cols-products-grid gap-7">
        {products?.map((product, index) => <ProductCard product={product} key={index} />)}
      </div>
    </>
  )
}

export default ProductGrid
