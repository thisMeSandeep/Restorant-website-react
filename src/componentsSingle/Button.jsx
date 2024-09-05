import React from 'react'

const Button = ({children , }) => {
  return (
    <div className='bg-orange inline-block rounded-sm text-center text-white text-lg font-poppins px-8 py-2 cursor-pointer hover:bg-lightorange'>{children}</div>
  )
}

export default Button