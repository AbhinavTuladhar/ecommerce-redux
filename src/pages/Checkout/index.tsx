import PageTitle from '@/components/misc/PageTitle'
import PageLayout from '@/components/layouts/PageLayout'
import ParentForm from './ParentForm'
import OrderSummary from '../Cart/OrderSummary'
import Security from './Security'
import OrderDetail from './OrderDetail'

const Index = () => {
  return (
    <PageLayout>
      <PageTitle> Checkout </PageTitle>
      <div className="grid grid-cols-1 items-start gap-x-10 gap-y-8 py-10 md:grid-cols-cart-grid">
        <section className="proper-border">
          <div className="mx-auto w-container space-y-8 py-4">
            <ParentForm />
            <Security />
          </div>
        </section>
        <OrderDetail />
      </div>
    </PageLayout>
  )
}

export default Index
