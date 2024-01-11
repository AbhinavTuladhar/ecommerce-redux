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
    <main className="mx-auto flex w-5/6 flex-col py-4">
      <h1 className="border-b border-slate-500 pb-4 text-center font-bold fluid-text-4xl">Cart</h1>
      {isCartEmpty ? (
        <NoItemInfo />
      ) : (
        <div className="grid grid-cols-1 items-start gap-x-10 gap-y-8 py-10 md:grid-cols-cart-grid">
          <ItemList />
          <OrderSummary />
        </div>
      )}
    </main>
  )
}

export default Index
