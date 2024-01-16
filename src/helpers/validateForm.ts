import type { MasterFormType } from '@/pages/Checkout/formsTypes'

/**
 * Returns true if even ONE of the values is either non 0 or a non-empty string.
 * @param obj Any general object
 * @returns An array of errors. Empty if there are none.
 */
const isNotEmpty = (obj: object): boolean => {
  return Object.values(obj).some((value) => value !== 0 && value !== '')
}

const validateForm = (form: MasterFormType): string[] => {
  const errors: string[] = []
  const { billingInfo, paymentMethod } = form

  // Checking whether all the fields of BillingInfo are populated
  Object.entries(billingInfo).forEach(([key, value]) => {
    if (value === '') {
      errors.push(`The value of ${key} for Billing Info is required.`)
    }
  })

  // Case 1: credit card full, paypal empty -> no error
  // Case 2: credit card empty, paypal full -> no error
  // Case 3: either one is non-empty -> raise error
  const { paypal, creditCard } = paymentMethod

  // Checking whether either is completely empty or not
  const isCreditCardNonEmpty = isNotEmpty(creditCard)
  const isPaypalNonEmpty = isNotEmpty(paypal)

  // If both are empty, raise error
  if (!isCreditCardNonEmpty && !isPaypalNonEmpty) {
    errors.push('Choose a payment method and fill it.')
  }

  // If first is non-empty, the other should be empty and vice-versa.
  else if (isCreditCardNonEmpty && isPaypalNonEmpty) {
    errors.push('Fill up either credit card or paypal, but not both.')
  }

  // Now checking within the individual keys
  // Checking for credit card
  else if (isCreditCardNonEmpty) {
    Object.entries(creditCard).forEach(([key, value]) => {
      if (value === '') {
        errors.push(`${key} field of credit card is required.`)
      }
    })
  }

  // Same for paypal
  else if (isPaypalNonEmpty) {
    Object.entries(paypal).forEach(([key, value]) => {
      if (value === '') {
        errors.push(`${key} field of paypal is required.`)
      }
    })
  }

  return errors
}

export default validateForm
