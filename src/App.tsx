import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { fetchProducts, ProductsSelector } from '@/features/products/productsSlice'
import NavBar from "@/components/misc/NavBar"
import Home from "@/pages/Home"

const App = () => {
  const products = useAppSelector(ProductsSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (products.products.length === 0) {
      dispatch(fetchProducts())
    }
  }, [dispatch, products.products.length])

  // useEffect(() => {
  //   console.log(products)
  // }, [products])

  return (
    <div className='min-h-[100dvh] bg-gray-800 text-white'>
      <NavBar />
      <Home />
    </div>
  )
}

export default App
