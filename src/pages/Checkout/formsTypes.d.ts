export interface BillingInfoType {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  town: string
}

export type BillingInfoNames = keyof BillingInfoType

export type ChildSectionName = 'billingInfo'

export interface MasterFormType {
  billingInfo: BillingInfoType
}
