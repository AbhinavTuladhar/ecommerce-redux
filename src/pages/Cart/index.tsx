import ItemList from './ItemList'
import OrderSummary from './OrderSummary'
import { useAppSelector } from '@/hooks/reduxHooks'
import { CartSelector } from '@/features/cart/cartSlice'
import findTotalItems from '@/helpers/findTotalItems'
import NoItemInfo from './NoItemInfo'
import PageTitle from '@/components/misc/PageTitle'

const Index = () => {
  const cart = useAppSelector(CartSelector)
  const isCartEmpty = findTotalItems(cart) === 0

  return (
    <main className="mx-auto flex w-11/12 flex-col py-4 md:w-5/6">
      <PageTitle> Cart </PageTitle>
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
