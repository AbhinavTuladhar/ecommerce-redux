import { useState } from 'react'
import Visa from '@/assets/visa.svg'
import Paypal from '@/assets/paypal.svg'
import Input from '@/components/misc/Input'
import Accordion from '@/components/layouts/Accordion'

const PaymentMethod = () => {
  type PaymentChoice = 'visa' | 'paypal'
  const [selectedPayment, setSelectedPayment] = useState<PaymentChoice>()

  const handlePaymentChange = (payload: PaymentChoice) => {
    setSelectedPayment(payload)
  }

  const selectedMethodStyle = 'bg-transparent'
  const unselectedMethodStyle = 'dark:bg-gray-900 bg-gray-100'

  const visaDiv = (
    <article
      className={`proper-border rounded-lg transition-all ${
        selectedPayment === 'visa' ? selectedMethodStyle : unselectedMethodStyle
      }`}
    >
      <div className="px-2 py-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-x-4">
            <input type="radio" name="paymentMethod" className="h-4 w-4" onClick={() => handlePaymentChange('visa')} />
            <span className="font-bold"> Credit card </span>
          </div>
          <img src={Visa} />
        </div>

        <Accordion visible={selectedPayment === 'visa'}>
          <div className="grid grid-cols-12 gap-x-4 gap-y-8">
            <div className="col-span-12 flex flex-col gap-y-1">
              <span className="font-bold">Card number </span>
              <Input type="text" placeholder="Card number" />
            </div>

            <div className="col-span-12 flex flex-col gap-y-1 lg:col-span-7">
              <span className="font-bold"> Card holder </span>
              <Input type="text" placeholder="Card holder" />
            </div>
            <div className="col-span-6 flex flex-col gap-y-1 lg:col-span-3">
              <span className="font-bold"> Expiration Date </span>
              <Input type="date" placeholder="YYYY/MM/DD" />
            </div>
            <div className="col-span-6 flex flex-col gap-y-1 lg:col-span-2">
              <span className="font-bold"> CVC </span>
              <Input type="text" placeholder="CVC" />
            </div>
          </div>
        </Accordion>
      </div>
    </article>
  )

  const paypalDiv = (
    <article
      className={`proper-border rounded-lg transition-all ${
        selectedPayment === 'paypal' ? selectedMethodStyle : unselectedMethodStyle
      }`}
    >
      <div className="px-2 py-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-x-4">
            <input
              type="radio"
              name="paymentMethod"
              className="h-4 w-4"
              onClick={() => handlePaymentChange('paypal')}
            />
            <span className="font-bold"> Paypal </span>
          </div>
          <img src={Paypal} />
        </div>

        <Accordion visible={selectedPayment === 'paypal'}>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="col-span-1 flex flex-col gap-y-1">
              <span className="font-bold"> First name</span>
              <Input type="text" placeholder="First name" />
            </div>
            <div className="col-span-1 flex flex-col gap-y-1">
              <span className="font-bold"> Last name</span>
              <Input type="text" placeholder="Last name" />
            </div>
            <div className="col-span-1 flex flex-col gap-y-1 sm:col-span-2">
              <span className="font-bold"> Email address</span>
              <Input type="email" placeholder="Email address" />
            </div>
          </div>
        </Accordion>
      </div>
    </article>
  )

  // const handlePaymentChange = (event:)

  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        <h2 className="font-bold fluid-text-2xl">Payment method</h2>
        <div className="flex flex-wrap justify-between text-sm">
          <span> Please choose your payment method </span>
          <span> Step 3 of 5 </span>
        </div>
        <div className="flex flex-col gap-y-4">
          {visaDiv}
          {paypalDiv}
        </div>
      </div>
    </section>
  )
}

export default PaymentMethod
