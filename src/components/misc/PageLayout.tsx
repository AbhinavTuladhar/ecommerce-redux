import { FC, ReactNode } from 'react'

interface PageProps {
  children: ReactNode
}

const PageLayout: FC<PageProps> = ({ children }) => {
  return <main className="mx-auto flex w-11/12 flex-col py-4 md:w-5/6">{children}</main>
}

export default PageLayout
