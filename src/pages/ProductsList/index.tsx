import React from 'react'
import useProducts from '@/hooks/useProducts'
import ProductGrid from '@/components/misc/ProductGrid'

const Index = () => {
  const productsResponse = useProducts()

  return <ProductGrid productsState={productsResponse} />
}

export default Index
