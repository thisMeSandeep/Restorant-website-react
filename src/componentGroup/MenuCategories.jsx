import React from 'react'
import { NavLink } from 'react-router-dom';
import { RiCupFill } from "react-icons/ri";
import { FaBurger } from "react-icons/fa6";
import { GiForkKnifeSpoon } from "react-icons/gi";

const MenuCategories = () => {
  return (
    <div className='flex justify-center items-center gap-6'>
      <NavLink to="/breakfast"  className={({ isActive }) =>
                            isActive
                                ? 'border-b-2 border-b-orange flex items-center gap-2 pb-4'
                                : 'flex items-center gap-2'
                        }>
      <RiCupFill className='text-3xl md:text-5xl text-orange ' />
       <div className='flex flex-col justify-center '>
        <p className='text-gray'>Popular</p>
        <p className='text-black font-bold md:text-lg'>Breakfast</p>
       </div>
      </NavLink>


      <NavLink to="/lunch"  className={({ isActive }) =>
                            isActive
                                ? 'border-b-2 border-b-orange flex items-center gap-2 pb-4'
                                : 'flex items-center gap-2'
                        }>
      <FaBurger className='text-3xl md:text-5xl text-orange ' />
       <div className='flex flex-col justify-center '>
        <p className='text-gray'>Special</p>
        <p className='text-black font-bold  md:text-lg'>Lunch</p>
       </div>
      </NavLink>

      <NavLink to="/dinner"  className={({ isActive }) =>
                            isActive
                                ? 'border-b-2 border-b-orange flex items-center gap-2 pb-4'
                                : 'flex items-center gap-2'
                        }>
      <RiCupFill className='text-3xl md:text-5xl text-orange ' />
       <div className='flex flex-col justify-center '>
        <p className='text-gray'>Lovely</p>
        <p className='text-black font-bold md:text-lg'>Dinner</p>
       </div>
      </NavLink>
    </div>
  )
}

export default MenuCategories