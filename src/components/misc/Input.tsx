import React from 'react'

interface NewInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<NewInputProps> = ({ ...props }) => {
  return (
    <input
      {...props}
      className="rounded-xl border border-gray-300 bg-gray-100 p-2 text-black outline-1 outline-offset-0 dark:bg-white"
    />
  )
}

export default Input
