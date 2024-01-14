import { BsShieldFillCheck } from 'react-icons/bs'

const Security = () => {
  return (
    <div className="w-64 space-y-4">
      <BsShieldFillCheck className="h-8 w-8" />
      <div className="space-y-2">
        <span className="font-bold"> Your data is safe! </span>
        <p> We are using the most advanced security to provide you the best experience ever. </p>
      </div>
    </div>
  )
}

export default Security
