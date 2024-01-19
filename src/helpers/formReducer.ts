import { ActionType } from '@/pages/Checkout/enums'
import type { Action, MasterFormType, PaymentMethod } from '@/pages/Checkout/formsTypes'

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

    case ActionType.UPDATE_PAYMENT_METHOD: {
      const { payload } = action

      // ChatGPT shenanigans :/
      const updatedPaymentMethod: PaymentMethod = {
        ...state.paymentMethod,
        ...(payload.creditCard
          ? {
              creditCard: {
                ...state.paymentMethod.creditCard,
                ...payload.creditCard,
              },
            }
          : {}), // Only spread creditCard if it's present in the payload
        ...(payload.paypal
          ? {
              paypal: {
                ...state.paymentMethod.paypal,
                ...payload.paypal,
              },
            }
          : {}), // Only spread paypal if it's present in the payload
      }

      return {
        ...state,
        paymentMethod: updatedPaymentMethod,
      }
    }

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

export default formReducer
