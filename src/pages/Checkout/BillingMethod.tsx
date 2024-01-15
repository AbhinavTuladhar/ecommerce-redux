import { FC } from 'react'
import DHL from '@/assets/dhl.svg'
import Fedex from '@/assets/fedex.svg'

interface RowProps {
  method: string
  image: string
}

const BillingMethodRow: FC<RowProps> = ({ method, image }) => {
  return (
    <div className="proper-border flex flex-col flex-wrap items-center justify-between gap-y-2 rounded-lg bg-gray-100 p-2 dark:bg-gray-900 sm:flex-row">
      <div className="flex w-10 flex-row items-center gap-x-1 sm:gap-x-4">
        <input type="radio" name="method" className="h-4 w-4" />
        <span className="font-bold"> {method}</span>
      </div>
      <div className="flex flex-row gap-x-3">
        <span className="text-green-500"> 30 USD </span>
        <span className="font-bold"> Additional price </span>
      </div>

      <div className="flex w-20 justify-end">
        <img src={image} />
      </div>
    </div>
  )
}

const BillingMethod = () => {
  const methodData = [
    { method: 'FedEx', image: Fedex },
    { method: 'DHL', image: DHL },
  ]

  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        <h2 className="font-bold fluid-text-2xl">Billing Method</h2>

        <div className="flex justify-between text-sm">
          <span> Please choose your billing method </span>
          <span> Step 2 of 5 </span>
        </div>

        <div className="flex flex-col gap-y-4">
          {methodData.map((method, index) => (
            <BillingMethodRow {...method} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BillingMethod
