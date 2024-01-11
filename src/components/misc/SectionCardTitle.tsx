import { FC } from "react"

interface CardProps {
  children: React.ReactNode
}

const SectionCardTitle: FC<CardProps> = ({ children }) => {
  return (
    <div className='py-4 border-b bg-gray-50 dark:bg-complementary border-gray-300 dark:border-slate-700'>
      <div className='w-11/12 mx-auto font-bold text-2xl '>
        {children}
      </div>
    </div>
  )
}

export default SectionCardTitle