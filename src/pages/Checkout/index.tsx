import NoItemInfo from '@/components/misc/NoItemInfo'
import PageTitle from '@/components/misc/PageTitle'
import FadeInContainer from '@/components/layouts/FadeInContainer'
import MainPageLayout from '@/components/layouts/MainPageLayout'
import PageLayout from '@/components/layouts/PageLayout'
import { CartSelector } from '@/features/cart/cartSlice'
import findTotalItems from '@/helpers/findTotalItems'
import { useAppSelector } from '@/hooks/reduxHooks'
import OrderDetail from './OrderDetail'
import ParentForm from './ParentForm'
import Security from './Security'

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
