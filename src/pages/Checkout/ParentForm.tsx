import React, { useReducer } from 'react'
import BillingInfo from './BillingInfo'
import BillingMethod from './BillingMethod'
import PaymentMethod from './PaymentMethod'
import Additional from './Additional'
import type { MasterFormType, Action, BillingMethod as BillingMethodType } from './formsTypes'
import { ActionType } from './enums'
import Confirmation from './Confirmation'
import formReducer from '@/helpers/formReducer'
import validateForm from '@/helpers/validateForm'

const ParentForm = () => {
  const initialState: MasterFormType = {
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
        expirationDate: '',
        CVC: 0,
      },
      paypal: {
        firstName: '',
        lastName: '',
        email: '',
      },
    },
    additionalInformation: '',
    confirmation: [false, false],
  }

  const [formState, dispatch] = useReducer<(state: MasterFormType, actions: Action) => MasterFormType>(
    formReducer,
    initialState,
  )

  const handleBillingInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    dispatch({
      type: ActionType.UPDATE_BILLING_INFO,
      payload: {
        [name]: value,
      },
    })
  }

  const handleBillingMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as BillingMethodType
    dispatch({
      type: ActionType.UPDATE_BILLING_METHOD,
      payload: value,
    })
  }

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    // Splitting the name of the input as mentioned in the PaymentMethod JSX
    const [paymentMethodKey, nestedKey] = name.split(' ')

    dispatch({
      type: ActionType.UPDATE_PAYMENT_METHOD,
      payload: {
        [paymentMethodKey]: {
          [nestedKey]: value,
        },
      },
    })
  }

  const handleAdditionalInfoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target
    dispatch({
      type: ActionType.UPDATE_ADDITIONAL_INFORMATION,
      payload: value,
    })
  }

  const handleConfirmationChange = (index: number) => {
    dispatch({
      type: ActionType.UPDATE_CONFIRMATION_FLAGS,
      payload: index || 0,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const errors = validateForm(formState)
    if (errors.length === 0) {
      console.log('Form validated!')
    } else {
      console.error(errors)
    }
  }

  return (
    <form className="space-y-10" onSubmit={handleSubmit}>
      <BillingInfo formData={formState} handleInputChange={handleBillingInfoChange} />
      <BillingMethod formData={formState} handleInputChange={handleBillingMethodChange} />
      <PaymentMethod formData={formState} handleInputChange={handlePaymentMethodChange} />
      <Additional formData={formState} handleInputChange={handleAdditionalInfoChange} />
      <Confirmation
        data={formState}
        handleFirstInputChange={() => handleConfirmationChange(0)}
        handleSecondInputChange={() => handleConfirmationChange(1)}
      />
      <button className="rounded-lg border-green-700 bg-darkmode-green px-10 py-2 font-bold tracking-tight text-white">
        Complete order
      </button>
    </form>
  )
}

export default ParentForm
