import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";


const ClientCard = ({img,name,post}) => {
  return (
    <div className='flex flex-col gap-5  hover:bg-orange group  py-5 px-4 rounded-md'>
        <FaQuoteLeft  className='text-5xl text-orange group-hover:text-white'/>
        <p className='group-hover:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae cum vero, sint </p>
        <div className='flex gap-4'>
            <div className='w-12 rounded-full bg-black p-.5'><img src={img} alt="" className='w-full h-full rounded-full object-cover'/></div>
            <div>
                <p className='font-bold group-hover:text-white'>{name}</p>
                <p className='group-hover:text-white'>{post}</p>
            </div>
        </div>
    </div>
  )
}

export default ClientCard