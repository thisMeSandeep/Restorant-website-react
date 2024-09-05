import React from 'react';
import { FaUserTie } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";


const OurServices = () => {
    return (
        <div className='flex flex-col sm:flex-row items-center justify-between flex-wrap gap-6  '>
        <div className='w-full md:w-[48%] lg:w-[23%] bg-white flex flex-col justify-center  gap-4 shadow-md py-10 pl-4 pr-5 hover:bg-orange group rounded-sm'>
            <FaUserTie className='text-orange text-5xl group-hover:text-white' />
            <p className='text-black font-bold text-xl group-hover:text-white'>Master Chefs</p>
            <p className='text-gray group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus praesentium enim laborum .</p>
        </div>
        <div className='w-full md:w-[48%] lg:w-[23%] bg-white flex flex-col justify-center  gap-4 shadow-md py-10 pl-4 pr-5 hover:bg-orange group rounded-sm'>
            <GiKnifeFork className='text-orange text-5xl group-hover:text-white' />
            <p className='text-black font-bold text-xl group-hover:text-white'>Quality Food</p>
            <p className='text-gray group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus praesentium enim laborum .</p>
        </div>
        <div className='w-full md:w-[48%] lg:w-[23%] bg-white flex flex-col justify-center  gap-4 shadow-md py-10 pl-4 pr-5 hover:bg-orange group rounded-sm'>
            <FaCartPlus  className='text-orange text-5xl group-hover:text-white' />
            <p className='text-black font-bold text-xl group-hover:text-white'>Online Order</p>
            <p className='text-gray group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus praesentium enim laborum .</p>
        </div>
        <div className='w-full md:w-[48%] lg:w-[23%] bg-white flex flex-col justify-center  gap-4 shadow-md py-10 pl-4 pr-5 hover:bg-orange group rounded-sm'>
            <RiCustomerServiceFill className='text-orange text-5xl group-hover:text-white' />
            <p className='text-black font-bold text-xl group-hover:text-white'>24/7 Service</p>
            <p className='text-gray group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus praesentium enim laborum .</p>
        </div>
        </div>
    )
}

export default OurServices