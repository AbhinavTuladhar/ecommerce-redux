import { useEffect } from 'react'

import NavBar from '@/components/misc/NavBar'
import Footer from '@/components/misc/Footer'
import ScrollToTop from '@/components/misc/ScrollToTop'
import { fetchCategories, CategoriesSelector } from '@/features/categories/categoriesSlice'
import { DarkSelector } from '@/features/dark/darkSlice'
import { fetchProducts, ProductsSelector } from '@/features/products/productsSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import Router from './Router'

const App = () => {
  const products = useAppSelector(ProductsSelector)
  const categories = useAppSelector(CategoriesSelector)
  const darkModeEnabled = useAppSelector(DarkSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (products.products.length === 0) {
      dispatch(fetchProducts())
    }
  }, [dispatch, products.products.length])

  useEffect(() => {
    if (categories.categories.length === 0) {
      dispatch(fetchCategories())
    }
  }, [dispatch, categories.categories.length])

  return (
    <div className={`${darkModeEnabled ? 'dark' : ''}`}>
      <div className="grid min-h-[100dvh] grid-rows-page-layout bg-white text-slate-800 duration-500 ease-out dark:bg-slate-900 dark:text-white">
        <NavBar />
        <Router />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  )
}

export default App
