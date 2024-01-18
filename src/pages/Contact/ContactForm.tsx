import React, { useState } from 'react'
import Input from '@/components/misc/Input'

const ContactForm = () => {
  interface ContactFormType {
    [key: string]: string
    firstName: string
    lastName: string
    email: string
    inquiry: string
  }

  const [formData, setFormData] = useState<ContactFormType>({
    firstName: '',
    lastName: '',
    email: '',
    inquiry: '',
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('We have definitely received your inquiry :-)')
    console.log('The form that you submitted is: ', formData)
    setFormData((prevState) => {
      const newState = { ...prevState }
      Object.keys(newState).forEach((key) => {
        newState[key] = ''
      })
      return newState
    })
  }

  return (
    <section className="proper-border mx-auto rounded-lg px-4 py-10 shadow-xl">
      <form className="grid grid-cols-2 gap-x-2 gap-y-4" onSubmit={handleSubmit}>
        <div className="col-span-2 space-y-1 xs:col-span-1">
          <label htmlFor="firstName">First Name</label>
          <Input
            id="firstName"
            name="firstName"
            onChange={handleInputChange}
            placeholder="First Name"
            value={formData.firstName}
            required
          />
        </div>

        <div className="col-span-2 space-y-1 xs:col-span-1">
          <label htmlFor="lastName">Last Name</label>
          <Input
            id="lastName"
            name="lastName"
            onChange={handleInputChange}
            placeholder="Last Name"
            value={formData.lastName}
            required
          />
        </div>

        <div className="col-span-2 space-y-1">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            name="email"
            onChange={handleInputChange}
            placeholder="Email address"
            type="email"
            value={formData.email}
            required
          />
        </div>

        <div className="col-span-2 flex flex-col space-y-1">
          <label htmlFor="inquiry"> What can we help you with? </label>
          <textarea
            id="inquiry"
            name="inquiry"
            onChange={handleInputChange}
            className="h-24 min-h-12 rounded-xl border border-gray-300 bg-gray-100  p-2 text-black dark:bg-white"
            placeholder="Enter your questions here..."
            value={formData.inquiry}
            required
          />
        </div>

        <button className="col-span-2 justify-self-center rounded-lg bg-lightmode-green px-8 py-2 text-white duration-500 hover:brightness-125 dark:bg-darkmode-green">
          Submit
        </button>
      </form>
    </section>
  )
}

export default ContactForm
