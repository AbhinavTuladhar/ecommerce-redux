import ContactForm from './ContactForm'
import PageLayout from '@/components/layouts/PageLayout'
import PageTitle from '@/components/misc/PageTitle'
import FadeInContainer from '@/components/layouts/FadeInContainer'

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
