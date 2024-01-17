import React, { useEffect, useReducer, useState } from 'react'
import BillingInfo from './BillingInfo'
import BillingMethod from './BillingMethod'
import PaymentMethod from './PaymentMethod'
import Additional from './Additional'
import Confirmation from './Confirmation'
import type { MasterFormType, Action, BillingMethod as BillingMethodType } from './formsTypes'
import { ActionType } from './enums'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { clearCart } from '@/features/cart/cartSlice'
import formReducer from '@/helpers/formReducer'
import validateForm from '@/helpers/validateForm'
import ModalContainer from '@/components/layouts/ModalContainer'

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

  const cartDispatch = useAppDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const toggleModal = () => {
    setIsModalOpen((state) => !state)
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
    const errorList = validateForm(formState)
    setErrors(errorList)

    if (errorList.length === 0) {
      setIsSubmitted(true) // Form is valid and submitted
    } else {
      toggleModal() // Form is not valid, open the modal
    }
  }

  useEffect(() => {
    if (!isSubmitted) {
      return
    }

    // Perform navigation logic here (e.g., redirect to another page)
    console.log('Form submitted successfully!')
    console.log('The form data is: ', formState)

    // Clear the cart n successful submission.
    cartDispatch(clearCart())
  }, [isSubmitted, formState, cartDispatch])

  return (
    <form className="flex flex-col gap-y-10" onSubmit={handleSubmit}>
      <BillingInfo formData={formState} handleInputChange={handleBillingInfoChange} />
      <BillingMethod formData={formState} handleInputChange={handleBillingMethodChange} />
      <PaymentMethod formData={formState} handleInputChange={handlePaymentMethodChange} />
      <Additional formData={formState} handleInputChange={handleAdditionalInfoChange} />
      <Confirmation
        data={formState}
        handleFirstInputChange={() => handleConfirmationChange(0)}
        handleSecondInputChange={() => handleConfirmationChange(1)}
      />
      <button className="self-start rounded-lg border-green-700 bg-darkmode-green px-10 py-2 font-bold tracking-tight text-white">
        Complete order
      </button>

      <ModalContainer isVisible={isModalOpen} closeModal={toggleModal}>
        <div className="flex flex-col gap-y-8">
          <div className="space-y-2">
            <h2 className="font-bold text-red-500 fluid-text-xl"> You have not filled the details correctly! </h2>
            <h4 className="font-bold"> Please read the information below and correct your information. </h4>
          </div>
          <div className="space-y-2">
            {errors.map((error, index) => (
              <p key={index}> {error} </p>
            ))}
          </div>
        </div>
      </ModalContainer>
    </form>
  )
}

export default ParentForm
