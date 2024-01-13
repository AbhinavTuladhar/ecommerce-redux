import ItemList from './ItemList'
import OrderSummary from './OrderSummary'
import { useAppSelector } from '@/hooks/reduxHooks'
import { CartSelector } from '@/features/cart/cartSlice'
import findTotalItems from '@/helpers/findTotalItems'
import NoItemInfo from './NoItemInfo'
import PageLayout from '@/components/layouts/PageLayout'
import PageTitle from '@/components/misc/PageTitle'

const Index = () => {
  const cart = useAppSelector(CartSelector)
  const isCartEmpty = findTotalItems(cart) === 0

  return (
    <PageLayout>
      <PageTitle> Cart </PageTitle>
      {isCartEmpty ? (
        <NoItemInfo />
      ) : (
        <div className="grid grid-cols-1 items-start gap-x-10 gap-y-8 py-10 md:grid-cols-cart-grid">
          <ItemList />
          <OrderSummary />
        </div>
      )}
    </PageLayout>
  )
}

export default Index
