import ItemList from './ItemList'
import OrderSummary from './OrderSummary'
import { useAppSelector } from '@/hooks/reduxHooks'
import { CartSelector } from '@/features/cart/cartSlice'
import findTotalItems from '@/helpers/findTotalItems'
import NoItemInfo from './NoItemInfo'

const Index = () => {
  const cart = useAppSelector(CartSelector)
  const isCartEmpty = findTotalItems(cart) === 0

  return (
    <main className='w-5/6 py-4 mx-auto'>
      <h1 className='text-4xl font-bold text-center pb-4 border-b border-slate-500'>
        Cart
      </h1>
      {isCartEmpty ? (
        <NoItemInfo />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-cart-grid items-start gap-x-10 gap-y-8 py-10'>
          <ItemList />
          <OrderSummary />
        </div>
      )}
    </main>
  )
}

export default Index