import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '@/pages/Home'
import Product from '@/pages/Product'
import Cart from './pages/Cart'
import Checkout from '@/pages/Checkout'

const Router = () => {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="" element={<Home />} key="home" />
      <Route path="/product/:id" element={<Product />} key="product" />
      <Route path="/cart" element={<Cart />} key="cart" />
      <Route path="/checkout" element={<Checkout />} key="checkout" />
    </Routes>
  )
}

export default Router
