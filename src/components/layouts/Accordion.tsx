import { FC, ReactNode } from 'react'

interface AccordionProps {
  children: ReactNode
  visible: boolean
}

const Accordion: FC<AccordionProps> = ({ children, visible }) => {
  return (
    <div className={`grid transition-all duration-500 ${visible ? 'grid-rows-[1fr] py-4' : 'grid-rows-[0fr]'}`}>
      <div className="overflow-hidden">{children}</div>
    </div>
  )
}

export default Accordion
