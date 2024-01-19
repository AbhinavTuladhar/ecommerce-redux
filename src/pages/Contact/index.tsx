import FadeInContainer from '@/components/layouts/FadeInContainer'
import PageLayout from '@/components/layouts/PageLayout'
import PageTitle from '@/components/misc/PageTitle'
import ContactForm from './ContactForm'

const Index = () => {
  return (
    <FadeInContainer>
      <PageLayout>
        <PageTitle>Contact Us</PageTitle>
        <main className="mx-auto w-container py-10 xs:w-fit">
          <ContactForm />
        </main>
      </PageLayout>
    </FadeInContainer>
  )
}

export default Index
