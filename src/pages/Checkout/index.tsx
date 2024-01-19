import PageTitle from '@/components/misc/PageTitle'
import PageLayout from '@/components/layouts/PageLayout'
import ParentForm from './ParentForm'
import Security from './Security'
import OrderDetail from './OrderDetail'
import MainPageLayout from '@/components/layouts/MainPageLayout'
import { useAppSelector } from '@/hooks/reduxHooks'
import { CartSelector } from '@/features/cart/cartSlice'
import findTotalItems from '@/helpers/findTotalItems'
import NoItemInfo from '@/components/misc/NoItemInfo'
import FadeInContainer from '@/components/layouts/FadeInContainer'

const Index = () => {
  const cart = useAppSelector(CartSelector)
  const isCartEmpty = findTotalItems(cart) === 0

  return (
    <FadeInContainer>
      <PageLayout>
        <PageTitle> Checkout </PageTitle>
        {isCartEmpty ? (
          <NoItemInfo />
        ) : (
          <MainPageLayout>
            <section className="proper-border rounded-lg">
              <div className="mx-auto w-container space-y-8 py-4">
                <ParentForm />
                <Security />
              </div>
            </section>
            <OrderDetail />
          </MainPageLayout>
        )}
      </PageLayout>
    </FadeInContainer>
  )
}

export default Index
