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


interface PaymentCreditCard {
  creditCard: CreditCard,
  paypal?: never
}

interface PaymentPayPal {
  creditCard?: never,
  paypal: Paypal
}

// Either CreditCard OR Paypal - not both.
export type PaymentMethod = PaymentCreditCard | PaymentPayPal
/**
 * Payment method end
 */

export type AdditionalInformation = string | undefined

export type ConfirmationFlags = [boolean, boolean]

export type ChildSectionName = 'billingInfo'

export interface MasterFormType {
  billingInfo: BillingInfoType,
  billingMethod: BillingMethod,
  paymentMethod: PaymentMethod,
  additionalInformation?: string,
  confirmation: ConfirmationFlags
}
