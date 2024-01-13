import React, { FC } from 'react'
import Input from '@/components/misc/Input'
import type { MasterFormType } from './formsTypes'
import type { BillingInfoNames } from './formsTypes'

interface Props {
  formData: MasterFormType
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const BillingInfo: FC<Props> = ({ handleInputChange, formData }) => {
  interface InputInterface {
    title: string
    placeholder: string
    type: React.HTMLInputTypeAttribute
    name: BillingInfoNames
    value: string | number | readonly string[] | undefined
  }

  const {
    billingInfo: { address, email, firstName, lastName, phone, town },
  } = formData

  const formConstruct: Array<InputInterface> = [
    { title: 'First Name', placeholder: 'First Name', type: 'text', name: 'firstName', value: firstName },
    { title: 'Last Name', placeholder: 'Last Name', type: 'text', name: 'lastName', value: lastName },
    { title: 'Email address', placeholder: 'Email address', type: 'email', name: 'email', value: email },
    { title: 'Phone number', placeholder: 'Phone number', type: 'number', name: 'phone', value: phone },
    { title: 'Address', placeholder: 'Address', type: 'text', name: 'address', value: address },
    { title: 'Town or city', placeholder: 'Town or city', type: 'text', name: 'town', value: town },
  ]

  const mappedInputs = formConstruct.map((entry, index) => {
    const { placeholder, title, type, name, value } = entry
    return (
      <div className="flex flex-col gap-y-1" key={index}>
        <span className="font-bold"> {title} </span>
        <Input onChange={handleInputChange} placeholder={placeholder} type={type} name={name} value={value} />
      </div>
    )
  })

  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        <h2 className="font-bold fluid-text-2xl">Billing Info</h2>
        <div className="flex justify-between text-sm">
          <span> Please enter your billing info </span>
          <span> Step 1 of 5 </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 xs:grid-cols-2">{mappedInputs}</div>
    </section>
  )
}

export default BillingInfo
