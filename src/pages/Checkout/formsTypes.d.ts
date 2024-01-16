export interface BillingInfoType {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  town: string
}

export type BillingInfoNames = keyof BillingInfoType

// One-liner for billing method.
export type BillingMethod = 'fedex' | 'dhl'

/**
 * Payment method start
 */
interface CreditCard {
  cardNumber: string,
  cardHolder: string,
  expirationDate: Date,
  CVC: number
}

interface Paypal {
  firstName: string,
  lastName: string,
  email: string
}


interface BillingCreditCard {
  creditCard: CreditCard,
  paypal?: never
}

interface BillingPayPal {
  creditCard?: never,
  paypal: Paypal
}

// Either CreditCard OR Paypal - not both.
export type BillingMethod = BillingCreditCard | BillingPayPal
/**
 * Payment method end
 */

export type AdditionalInformation = string | undefined

export type ConfirmationFlags = [boolean, boolean]

export type ChildSectionName = 'billingInfo'

export interface MasterFormType {
  billingInfo: BillingInfoType
}
