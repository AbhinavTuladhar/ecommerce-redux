import useProducts from '@/hooks/useProducts'
import ProductGrid from '@/components/misc/ProductGrid'
import PageLayout from '@/components/layouts/PageLayout'
import PageTitle from '@/components/misc/PageTitle'

const Index = () => {
  const productsResponse = useProducts()

  return (
    <PageLayout>
      <PageTitle> Our Products </PageTitle>
      <main className="py-10">
        <ProductGrid productsState={productsResponse} />
      </main>
    </PageLayout>
  )
}

export default Index
