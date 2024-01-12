import React, { useState } from 'react'
import BillingInfo from './BillingInfo'
import BillingMethod from './BillingMethod'
import type { MasterFormType, ChildSectionName } from './formsTypes'

const ParentForm = () => {
  const [formData, setFormData] = useState<MasterFormType>({
    billingInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: 0,
      address: '',
      town: '',
    },
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
    <div className="flex flex-col gap-y-10">
      <BillingInfo formData={formData} handleInputChange={(e) => handleInputChange(e, 'billingInfo')} />
      <BillingMethod />
    </div>
  )
}

export default ParentForm
