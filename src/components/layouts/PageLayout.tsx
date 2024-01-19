import { FC, ReactNode } from 'react'

interface PageProps {
  children: ReactNode
}

const PageLayout: FC<PageProps> = ({ children }) => {
  return <main className="mx-auto flex w-container flex-1 flex-col py-4">{children}</main>
}

export default PageLayout
