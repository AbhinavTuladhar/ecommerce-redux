import React, { useState } from 'react'
import BillingInfo from './BillingInfo'
import BillingMethod from './BillingMethod'
import PaymentMethod from './PaymentMethod'
import Additional from './Additional'
import type { MasterFormType, ChildSectionName } from './formsTypes'
import Confirmation from './Confirmation'

const ParentForm = () => {
  const [formData, setFormData] = useState<MasterFormType>({
    billingInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      town: '',
    },
    billingMethod: 'fedex',
    paymentMethod: {
      creditCard: {
        cardHolder: '',
        cardNumber: '',
        expirationDate: null,
        CVC: 0,
      },
    },
    additionalInformation: '',
    confirmation: [false, false],
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, section: ChildSectionName) => {
    const {
      target: { value, name },
    } = event
    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        // For accessing the nested object, ie the children components
        ...prevState[section],
        [name]: value,
      },
    }))
  }

  return (
    <form className="space-y-10">
      <BillingInfo formData={formData} handleInputChange={(e) => handleInputChange(e, 'billingInfo')} />
      <BillingMethod />
      <PaymentMethod />
      <Additional />
      <Confirmation />
      <button className="rounded-lg border-green-700 bg-darkmode-green px-10 py-2 font-bold tracking-tight text-white">
        Complete order
      </button>
    </form>
  )
}

export default ParentForm
