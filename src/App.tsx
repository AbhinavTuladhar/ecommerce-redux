import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { fetchProducts, ProductsSelector } from '@/features/products/productsSlice'
import NavBar from "@/components/misc/NavBar"
import Home from "@/pages/Home"
import Footer from './components/misc/Footer'

const App = () => {
  const [dark, setDark] = useState(true)
  const products = useAppSelector(ProductsSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (products.products.length === 0) {
      dispatch(fetchProducts())
    }
  }, [dispatch, products.products.length])

  const toggleDarkMode = () => {
    setDark(prevState => !prevState)
  }

  // useEffect(() => {
  //   console.log(products)
  // }, [products])

  return (
    <div className={`min-h-[100dvh]  ${dark ? 'dark' : ''}`}>
      <div className='duration-500 bg-slate-100 text-slate-800 dark:bg-gray-800 dark:text-white'>
        <NavBar dark={dark} toggleDarkMode={toggleDarkMode} />
        <Home />
        <Footer />
      </div>
    </div>
  )
}

export default App
