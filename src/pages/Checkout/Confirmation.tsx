import { FC, ReactNode } from 'react'

interface RowProps {
  children: ReactNode
}

const ConfirmationRow: FC<RowProps> = ({ children }) => {
  return (
    <div className="rounded-xl border border-gray-300 bg-gray-100 p-2 text-black outline-1 outline-offset-0 dark:bg-gray-900 dark:text-white">
      {children}
    </div>
  )
}

const Confirmation = () => {
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
        <ConfirmationRow>
          <div className="flex flex-row items-start gap-x-2">
            <input type="checkbox" className="w-h-6 h-6" />
            <span>I agree with sending an marketing and newsletter emails. No spam, promised!</span>
          </div>
        </ConfirmationRow>
        <ConfirmationRow>
          <div className="flex flex-row items-start gap-x-2">
            <input type="checkbox" className="w-h-6 h-6" />
            <span>I agree with our terms and conditions and privacy policy.</span>
          </div>
        </ConfirmationRow>
      </div>
    </section>
  )
}

export default Confirmation
