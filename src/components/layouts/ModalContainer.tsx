import { FC, ReactNode } from 'react'
import { RxCross2 } from 'react-icons/rx'

interface ModalProps {
  isVisible: boolean
  closeModal: () => void
  children: ReactNode
}

const ModalContainer: FC<ModalProps> = ({ isVisible, children, closeModal }) => {
  return (
    <>
      {isVisible && (
        <section className="fixed bottom-0 left-0 right-0 top-0 z-50 m-0 flex h-screen w-screen items-center justify-center bg-black/75">
          <div className="relative flex h-[95%] w-11/12 flex-col justify-center bg-white px-4 text-slate-800 duration-500 dark:bg-slate-900 dark:text-white sm:w-96">
            <RxCross2 className="absolute right-0 top-0 mr-4 mt-4 hover:cursor-pointer" onClick={closeModal} />
            {children}
          </div>
        </section>
      )}
    </>
  )
}

export default ModalContainer
