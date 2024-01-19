import PageLayout from '@/components/layouts/PageLayout'
import NavigateBackButton from '@/components/misc/NavigateBackButton'
import FadeInContainer from '@/components/layouts/FadeInContainer'

const Index = () => {
  return (
    <FadeInContainer>
      <PageLayout>
        <div className="flex flex-1 flex-col items-center justify-center gap-y-6 py-20 text-center">
          <h2 className="font-bold fluid-text-4xl">Thank you for shopping with us!</h2>
          <NavigateBackButton>Shop more?</NavigateBackButton>
        </div>
      </PageLayout>
    </FadeInContainer>
  )
}

export default Index
