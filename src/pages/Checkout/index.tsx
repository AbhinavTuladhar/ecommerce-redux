import PageTitle from '@/components/misc/PageTitle'
import PageLayout from '@/components/layouts/PageLayout'
import ParentForm from './ParentForm'
import Security from './Security'
import OrderDetail from './OrderDetail'
import MainPageLayout from '@/components/layouts/MainPageLayout'

const Index = () => {
  return (
    <PageLayout>
      <PageTitle> Checkout </PageTitle>
      <MainPageLayout>
        <section className="proper-border rounded-lg">
          <div className="mx-auto w-container space-y-8 py-4">
            <ParentForm />
            <Security />
          </div>
        </section>
        <OrderDetail />
      </MainPageLayout>
    </PageLayout>
  )
}

export default Index
