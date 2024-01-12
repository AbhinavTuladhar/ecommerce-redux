import { FC } from 'react'

interface TitleProps {
  children: React.ReactNode
}

const PageTitle: FC<TitleProps> = ({ children }) => {
  return <h1 className="border-b border-slate-500 pb-4 text-center font-bold fluid-text-4xl">{children}</h1>
}

export default PageTitle
