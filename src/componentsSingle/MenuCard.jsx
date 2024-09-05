import React from 'react'
import img1 from "../assets/menu-1.jpg"

const MenuCard = ({img}) => {
  return (
    <div className='w-full md:w-[48%] flex gap-6 items-center justify-center  px-1'>
        <div className='rounded-sm min-w-24 min-h-24'>
            <img src={img} alt="" className='rounded-sm w-full h-full'/>
        </div>
        <div className='w-full flex flex-col justify-center '>
            <div className='flex justify-between  border-b-2 border-[rgba(86,84,84,0.2)] '>
                <p className='text-lg md:text-xl font-bold'>Chicken Burger</p>
                <p className='text-lg md:text-xl font-bold text-orange'>$115</p>
            </div>
            <div>
            <p className='text-sm text-gray '>Lorem ipsum dolor sit amet consectetur adipisicing .</p>
            </div>
        </div>
    </div>
  )
}

export default MenuCard