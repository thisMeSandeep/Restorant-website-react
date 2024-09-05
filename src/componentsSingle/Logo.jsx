import React from 'react'
import { PiForkKnifeFill } from "react-icons/pi";

const Logo = () => {
  return (
    <div className=' w-fit flex items-center gap-2'><PiForkKnifeFill className='text-orange text-3xl sm:text-4xl md:text-5xl font-bold  '/> <span className='text-orange text-3xl sm:text-4xl md:text-5xl font-bold font-poppins'>Restoran</span></div>
  )
}

export default Logo