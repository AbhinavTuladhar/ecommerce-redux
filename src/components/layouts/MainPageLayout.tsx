import { FC, ReactNode } from 'react'

interface PageProps {
  children: ReactNode
}

const MainPageLayout: FC<PageProps> = ({ children }) => {
  return <div className="grid grid-cols-1 items-start gap-x-4 gap-y-8 py-10 md:grid-cols-main-grid">{children}</div>
}

export default MainPageLayout
