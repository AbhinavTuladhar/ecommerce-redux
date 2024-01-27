import { lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const Home = lazy(() => import('@/pages/Home'))
const Product = lazy(() => import('@/pages/Product'))
const Cart = lazy(() => import('@/pages/Cart'))
const Checkout = lazy(() => import('@/pages/Checkout'))
const ThankYou = lazy(() => import('@/pages/ThankYou'))
const ProductsList = lazy(() => import('@/pages/ProductsList'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))

const Router = () => {
  const location = useLocation()

  const routes = [
    { path: '/', element: <Home />, key: 'Home' },
    { path: '/products/:id', element: <Product />, key: 'product' },
    { path: '/cart', element: <Cart />, key: 'cart' },
    { path: '/checkout', element: <Checkout />, key: 'checkout' },
    { path: '/thankyou', element: <ThankYou />, key: 'thankyou' },
    { path: '/products', element: <ProductsList />, key: 'productList' },
    { path: '/about', element: <About />, key: 'about' },
    { path: '/contact', element: <Contact />, key: 'contact' },
    { path: '*', element: <NotFound />, key: 'test' },
  ]

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.key} />
        ))}
      </Routes>
    </AnimatePresence>
  )
}

export default Router
