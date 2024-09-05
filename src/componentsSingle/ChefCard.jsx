import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


const ChefCard = ({img,name,post}) => {
    return (
       
            <div className='border border-[rgba(0,0,0,0.1)] shadow-lg rounded-md group w-11/12 md:w-[47%] lg:w-[22%]'>
                <div className='pt-5 px-5 flex flex-col  items-center gap-3'>
                    <div className='h-auto w-full rounded-full overflow-hidden'>

                        <img src={img} alt="chef1" className='w-full h-full rounded-full object-cover group-hover:scale-125 transition-all duration-500' />

                    </div>
                    <h5 className='font-bold text-lg'>{name}</h5>
                    <p className='text-gray'>{post}</p>
                    <div className='flex items-center gap-5 '>
                        <div className='w-[40px] h-[50px] rounded-t-full flex justify-center items-center bg-orange group-hover:scale-125 origin-bottom transition-all duration-500'><FaInstagramSquare className='text-2xl text-white hover:scale-125 cursor-pointer' /></div>
                        <div className='w-[40px] h-[50px] rounded-t-full flex justify-center items-center bg-orange group-hover:scale-125 origin-bottom transition-all duration-500'><FaSquareXTwitter className='text-2xl text-white hover:scale-125 cursor-pointer' /></div>
                        <div className='w-[40px] h-[50px] rounded-t-full flex justify-center items-center bg-orange group-hover:scale-125 origin-bottom transition-all duration-500'><FaFacebookSquare className='text-2xl text-white hover:scale-125 cursor-pointer' /></div>
                    </div>
                </div>
            </div>
        
    )
}

export default ChefCard