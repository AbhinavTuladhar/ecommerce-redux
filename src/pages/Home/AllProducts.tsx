import { motion } from 'framer-motion'

import ProductGrid from '@/components/misc/ProductGrid'
import useProducts from '@/hooks/useProducts'

const AllProducts = () => {
  const productState = useProducts()

  const { error, loading, products } = productState

  // Shuffle the array and then send only four items into the grid component
  const randomProducts = products
    .map((value) => ({ value, sortKey: Math.random() }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .map(({ value }) => value)
    .slice(0, 4)

  const newState = {
    error,
    loading,
    products: randomProducts,
  }

  return (
    <section className="mx-auto flex w-container flex-col gap-y-8 py-8">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 1, margin: '-10px' }}
        className="font-semibold uppercase fluid-text-3xl"
      >
        Random Products!
      </motion.h2>
      <ProductGrid productsState={newState} />
    </section>
  )
}

export default AllProducts
