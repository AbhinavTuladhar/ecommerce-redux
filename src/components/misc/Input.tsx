import React from 'react'

interface NewInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<NewInputProps> = ({ ...props }) => {
  return <input {...props} className="rounded-xl p-2 text-black" />
}

export default Input
