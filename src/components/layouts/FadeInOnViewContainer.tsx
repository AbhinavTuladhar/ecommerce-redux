import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ContainerProps {
  children: ReactNode
  className?: string
}

const FadeInOnViewContainer: FC<ContainerProps> = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }}
    exit={{ opacity: 0, transition: { ease: 'easeIn', duration: 0.3 } }}
    viewport={{ once: true, amount: 0.25 }}
    className={className}
  >
    {children}
  </motion.div>
)

export default FadeInOnViewContainer
