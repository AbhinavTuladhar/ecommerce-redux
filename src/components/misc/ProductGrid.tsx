import { FC, Fragment } from 'react'

import FadeInContainer from '@/components/layouts/FadeInContainer'
import FadeInOnViewContainer from '@/components/layouts/FadeInOnViewContainer'
import ProductCard from '@/components/misc/ProductCard'
import type { ProductsState } from '@/features/products/productsSlice'

interface GridProps {
  productsState: ProductsState
}

const ProductGrid: FC<GridProps> = ({ productsState }) => {
  const { products, error, loading } = productsState

  return (
    <FadeInContainer>
      {loading && <div> Loading... </div>}
      {error && <div> Found an error </div>}
      <div className="grid grid-cols-products-grid items-stretch gap-7">
        {products?.map((product, index) => (
          <Fragment key={index}>
            <FadeInOnViewContainer>
              <ProductCard product={product} />
            </FadeInOnViewContainer>
          </Fragment>
        ))}
      </div>
    </FadeInContainer>
  )
}

export default ProductGrid
