import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { fetchProducts, ProductsSelector } from '@/features/products/productsSlice'
import { DarkSelector } from '@/features/dark/darkSlice'
import NavBar from "@/components/misc/NavBar"
import Footer from './components/misc/Footer'
import Router from './Router'
import ScrollToTop from '@/components/misc/ScrollToTop'

const App = () => {
  const products = useAppSelector(ProductsSelector)
  const darkModeEnabled = useAppSelector(DarkSelector)
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
    <div className={`min-h-[100dvh]  ${darkModeEnabled ? 'dark' : ''}`}>
      <div className='duration-500 bg-white text-slate-800 dark:bg-gray-800 dark:text-white'>
        <ScrollToTop />
        <NavBar />
        <Router />
        <Footer />
      </div>
    </div>
  )
}

export default App
