import { FC } from 'react'

interface TitleProps {
  children: React.ReactNode
}

const PageTitle: FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="border-b border-gray-300 pb-4 text-center font-bold fluid-text-4xl dark:border-gray-700">
      {children}
    </h1>
  )
}

export default PageTitle
