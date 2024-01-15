import { FC } from 'react'

interface CardProps {
  children: React.ReactNode
}

const SectionCardTitle: FC<CardProps> = ({ children }) => {
  return (
    <div className="proper-border rounded-t-lg border-b bg-slate-50 py-4 dark:bg-slate-800">
      <div className="mx-auto w-11/12 font-bold fluid-text-2xl ">{children}</div>
    </div>
  )
}

export default SectionCardTitle
