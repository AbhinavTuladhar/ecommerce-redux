import ItemList from './ItemList'
import OrderSummary from './OrderSummary'
import { useAppSelector } from '@/hooks/reduxHooks'
import { CartSelector } from '@/features/cart/cartSlice'
import findTotalItems from '@/helpers/findTotalItems'
import NoItemInfo from '@/components/misc/NoItemInfo'
import PageLayout from '@/components/layouts/PageLayout'
import PageTitle from '@/components/misc/PageTitle'
import MainPageLayout from '@/components/layouts/MainPageLayout'
import FadeInContainer from '@/components/layouts/FadeInContainer'

const Index = () => {
  const cart = useAppSelector(CartSelector)
  const isCartEmpty = findTotalItems(cart) === 0

  return (
    <FadeInContainer className="flex flex-col">
      <PageLayout>
        <PageTitle> Cart </PageTitle>
        {isCartEmpty ? (
          <NoItemInfo />
        ) : (
          <MainPageLayout>
            <ItemList />
            <div className="sticky top-2">
              <OrderSummary />
            </div>
          </MainPageLayout>
        )}
      </PageLayout>
    </FadeInContainer>
  )
}

export default Index
