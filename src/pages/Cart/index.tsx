import FadeInContainer from '@/components/layouts/FadeInContainer'
import MainPageLayout from '@/components/layouts/MainPageLayout'
import PageLayout from '@/components/layouts/PageLayout'
import NoItemInfo from '@/components/misc/NoItemInfo'
import PageTitle from '@/components/misc/PageTitle'
import { CartSelector } from '@/features/cart/cartSlice'
import findTotalItems from '@/helpers/findTotalItems'
import { useAppSelector } from '@/hooks/reduxHooks'

import ItemList from './ItemList'
import OrderSummary from './OrderSummary'

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
