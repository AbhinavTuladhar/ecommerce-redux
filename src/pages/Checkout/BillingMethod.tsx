import { FC, Fragment } from 'react'
import DHL from '@/assets/dhl.svg'
import Fedex from '@/assets/fedex.svg'

interface RowProps {
  method: string
  image: string
  value: string | number | readonly string[] | undefined
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const BillingMethodRow: FC<RowProps> = ({ method, image, value, handleInputChange }) => {
  return (
    <div className="proper-border flex flex-col flex-wrap items-center justify-between gap-y-2 rounded-lg bg-gray-100 p-2 dark:bg-gray-900 sm:flex-row">
      <div className="flex w-10 flex-row items-center gap-x-1 sm:gap-x-4">
        <input type="radio" name="method" className="h-4 w-4" value={value} onChange={handleInputChange} />
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

interface Props {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const BillingMethod: FC<Props> = ({ handleInputChange }) => {
  const methodData = [
    { method: 'FedEx', image: Fedex, value: 'fedex' },
    { method: 'DHL', image: DHL, value: 'dhl' },
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
            <Fragment key={index}>
              <BillingMethodRow {...method} handleInputChange={handleInputChange} />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BillingMethod
