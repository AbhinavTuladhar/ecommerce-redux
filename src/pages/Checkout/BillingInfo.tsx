import React, { FC } from 'react'
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
    value: string | number
  }

  const { billingInfo } = formData

  const formConstruct: Array<InputInterface> = [
    { title: 'First Name', placeholder: 'First Name', type: 'text', name: 'firstName', value: billingInfo.firstName },
    { title: 'Last Name', placeholder: 'Last Name', type: 'text', name: 'lastName', value: billingInfo.lastName },
    { title: 'Email address', placeholder: 'Email address', type: 'email', name: 'email', value: billingInfo.email },
    { title: 'Phone number', placeholder: 'Phone number', type: 'number', name: 'phone', value: billingInfo.phone },
    { title: 'Address', placeholder: 'Address', type: 'text', name: 'address', value: billingInfo.address },
    { title: 'Town or city', placeholder: 'Town or city', type: 'text', name: 'town', value: billingInfo.town },
  ]

  const mappedInputs = formConstruct.map((entry, index) => {
    const { placeholder, title, type, name, value } = entry
    return (
      <div className="flex flex-col gap-y-1" key={index}>
        <span className="font-bold"> {title} </span>
        <input
          onChange={handleInputChange}
          placeholder={placeholder}
          className="rounded-xl p-2 text-black"
          type={type}
          name={name}
          value={value}
        />
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
