import ContactForm from './ContactForm'

const Index = () => {
  return (
    <main className="mx-auto grid w-container flex-1 grid-cols-1 items-start gap-x-8 gap-y-8 py-10 lg:grid-cols-[1.25fr,_1fr]">
      <div className="flex h-full flex-col justify-center gap-y-20">
        <h2 className="font-bold fluid-text-2xl">Contact us!</h2>
        <p>Need to get in touch with us? Fill out the form in this page with your inquiry!</p>
      </div>
      <ContactForm />
    </main>
  )
}

export default Index
