import { FC, ReactNode } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

interface ModalProps {
  isVisible: boolean
  closeModal: () => void
  children: ReactNode
}

const ModalContainer: FC<ModalProps> = ({ isVisible, children, closeModal }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 top-0 z-50 m-0 flex h-screen w-screen items-center justify-center bg-black/75"
        >
          <motion.div
            initial={{ y: '-10vh', transitionTimingFunction: 'ease-out' }}
            animate={{ y: 0 }}
            exit={{
              y: '-20vh',
              transitionTimingFunction: 'ease-in',
            }}
            transition={{
              duration: 0.4,
              type: 'spring',
            }}
            className="relative flex h-[95%] w-11/12 flex-col justify-center overflow-y-auto bg-white px-4 py-8 text-slate-800 duration-500 dark:bg-slate-900 dark:text-white sm:w-96"
          >
            <RxCross2 className="absolute right-0 top-0 mr-4 mt-4 hover:cursor-pointer" onClick={closeModal} />
            {children}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default ModalContainer
