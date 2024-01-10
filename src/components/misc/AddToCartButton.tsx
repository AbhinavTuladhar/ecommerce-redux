import { FC } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  id: number
}

const AddToCartButton: FC<Props> = ({ id }) => {
  const notify = () => toast.success('Added item to the cart!')

  return (
    <button className='p-3 text-white duration-300 ease-out rounded-md bg-main-green hover:cursor-pointer hover:bg-green-600' onClick={notify}>
      Add to cart
      <ToastContainer theme='dark' autoClose={1250} />
    </button>
  )
}

export default AddToCartButton