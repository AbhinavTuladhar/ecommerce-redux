import React from 'react'

const BillingInfo = () => {
  interface InputInterface {
    title: string
    placeholder: string
    type: React.HTMLInputTypeAttribute
  }

  const formConstruct: Array<InputInterface> = [
    { title: 'First Name', placeholder: 'First Name', type: 'text' },
    { title: 'Last Name', placeholder: 'Last Name', type: 'text' },
    { title: 'Email address', placeholder: 'Email address', type: 'email' },
    { title: 'Phone number', placeholder: 'Phone number', type: 'number' },
    { title: 'Address', placeholder: 'Address', type: 'text' },
    { title: 'Town or city', placeholder: 'Town or city', type: 'text' },
  ]

  const mappedInputs = formConstruct.map((entry, index) => {
    const { placeholder, title, type } = entry
    return (
      <div className="flex flex-col gap-y-1" key={index}>
        <span className="font-bold"> {title} </span>
        <input placeholder={placeholder} className="rounded-xl p-2 text-black" type={type} />
      </div>
    )
  })

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="mb-4 fluid-text-2xl">Billing Info</h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">{mappedInputs}</div>
    </div>
  )
}

export default BillingInfo
