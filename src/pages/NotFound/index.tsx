import PageLayout from '@/components/layouts/PageLayout'
import FadeInContainer from '@/components/layouts/FadeInContainer'

const Index = () => {
  return (
    <FadeInContainer className="flex flex-col">
      <PageLayout>
        <div className="flex flex-1 flex-col items-center justify-center gap-y-4">
          <h1 className="font-bold fluid-text-3xl"> 404 </h1>
          <div className="space-y-2 text-center">
            <h2 className="font-semibold fluid-text-xl"> This is not the page you're looking for. </h2>
            <span> {new Date().toISOString()}</span>
          </div>
          <p> It appears the page you seek doesn't exist. </p>
        </div>
      </PageLayout>
    </FadeInContainer>
  )
}

export default Index
