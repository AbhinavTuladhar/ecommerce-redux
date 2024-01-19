import { FC, ReactNode } from 'react'

import type { MasterFormType } from './formsTypes'

interface RowProps {
  children: ReactNode
  checked?: boolean
  handleInputChange: (index: number) => void
  index: number
}

const ConfirmationRow: FC<RowProps> = ({ children, checked, handleInputChange, index }) => {
  return (
    <div className="proper-border rounded-xl bg-gray-100 p-2 text-black outline-1 outline-offset-0 dark:bg-gray-900 dark:text-white">
      <div className="flex flex-row items-start gap-x-2">
        <input type="checkbox" className="w-h-6 h-6" checked={checked} onChange={() => handleInputChange(index)} />
        {children}
      </div>
    </div>
  )
}

interface ConfirmationProps {
  data: MasterFormType
  handleFirstInputChange: (index: number) => void
  handleSecondInputChange: (index: number) => void
}

const Confirmation: FC<ConfirmationProps> = ({ data, handleFirstInputChange, handleSecondInputChange }) => {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="font-bold fluid-text-2xl">Confirmation</h2>
        <div className="flex flex-wrap justify-between gap-x-2 text-sm">
          <span> We are getting to the end. Just a few clicks and your order is ready! </span>
          <span> Step 5 of 5 </span>
        </div>
      </div>
      <div className="space-y-4">
        <ConfirmationRow
          checked={data.confirmation[0] === true}
          handleInputChange={() => handleFirstInputChange(0)}
          index={0}
        >
          <span>I agree with sending an marketing and newsletter emails. No spam, promised!</span>
        </ConfirmationRow>
        <ConfirmationRow
          checked={data.confirmation[1] === true}
          handleInputChange={() => handleSecondInputChange(1)}
          index={1}
        >
          <span>I agree with our terms and conditions and privacy policy.</span>
        </ConfirmationRow>
      </div>
    </section>
  )
}

export default Confirmation
