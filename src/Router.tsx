import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '@/pages/Home'
import Product from '@/pages/Product'
import Cart from '@/pages/Cart'
import Checkout from '@/pages/Checkout'
import ThankYou from '@/pages/ThankYou'
import ProductsList from '@/pages/ProductsList'
import NotFound from '@/pages/NotFound'

const Router = () => {
  const location = useLocation()

  const routes = [
    { path: '/', element: <Home />, key: 'Home' },
    { path: '/products/:id', element: <Product />, key: 'product' },
    { path: '/cart', element: <Cart />, key: 'cart' },
    { path: '/checkout', element: <Checkout />, key: 'checkout' },
    { path: '/thankyou', element: <ThankYou />, key: 'thankyou' },
    { path: '/products', element: <ProductsList />, key: 'productList' },
    { path: '*', element: <NotFound />, key: 'test' },
  ]

  return (
    <Routes location={location} key={location.pathname}>
      {routes.map((route) => (
        <Route path={route.path} element={route.element} key={route.key} />
      ))}
    </Routes>
  )
}

export default Router
