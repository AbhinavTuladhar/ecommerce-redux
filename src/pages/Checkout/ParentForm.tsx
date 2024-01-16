import React, { useReducer, useEffect } from 'react'
import BillingInfo from './BillingInfo'
import BillingMethod from './BillingMethod'
import PaymentMethod from './PaymentMethod'
import Additional from './Additional'
import type { MasterFormType, Action, BillingMethod as BillingMethodType } from './formsTypes'
import { ActionType } from './enums'
import Confirmation from './Confirmation'

const formReducer = (state: MasterFormType, action: Action): MasterFormType => {
  switch (action.type) {
    case ActionType.UPDATE_BILLING_INFO:
      return {
        ...state,
        billingInfo: {
          ...state.billingInfo,
          ...action.payload,
        },
      }

    case ActionType.UPDATE_BILLING_METHOD:
      return {
        ...state,
        billingMethod: action.payload,
      }
    case ActionType.UPDATE_PAYMENT_METHOD:
      return { ...state }
    case ActionType.UPDATE_ADDITIONAL_INFORMATION:
      return {
        ...state,
        additionalInformation: action.payload,
      }
    case ActionType.UPDATE_CONFIRMATION_FLAGS: {
      const { payload } = action
      const newState = { ...state }
      newState.confirmation = [...state.confirmation]
      newState.confirmation[payload] = !newState.confirmation[payload]
      return newState
    }
    default:
      return { ...state }
  }
}

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
        expirationDate: null,
        CVC: 0,
      },
    },
    additionalInformation: '',
    confirmation: [false, false],
  }

  const [formState, dispatch] = useReducer<(state: MasterFormType, actions: Action) => MasterFormType>(
    formReducer,
    initialState,
  )

  useEffect(() => {
    console.log(formState)
  }, [formState])

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

  const handleAdditionalInfoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target
    dispatch({
      type: ActionType.UPDATE_ADDITIONAL_INFORMATION,
      payload: value,
    })
  }

  const handleConfirmationChange = (event: React.ChangeEvent<HTMLInputElement>, index?: number) => {
    dispatch({
      type: ActionType.UPDATE_CONFIRMATION_FLAGS,
      payload: index || 0,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form className="space-y-10" onSubmit={handleSubmit}>
      <BillingInfo formData={formState} handleInputChange={handleBillingInfoChange} />
      <BillingMethod handleInputChange={handleBillingMethodChange} />
      <PaymentMethod />
      <Additional formData={formState} handleInputChange={handleAdditionalInfoChange} />
      <Confirmation
        data={formState}
        handleFirstInputChange={(e) => handleConfirmationChange(e, 0)}
        handleSecondInputChange={(e) => handleConfirmationChange(e, 1)}
      />
      <button className="rounded-lg border-green-700 bg-darkmode-green px-10 py-2 font-bold tracking-tight text-white">
        Complete order
      </button>
    </form>
  )
}

export default ParentForm
