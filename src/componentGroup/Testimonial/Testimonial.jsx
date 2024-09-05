import React from 'react'
import Swiper from "../Swiper"

const Testimonial = () => {
  return (
    <section>
        <p className='text-center font-cursive text-orange text-lg md:text-2xl'>Testimonial</p>
        <p className='text-center text-3xl md:text-4xl lg:text-5xl font-[800] md:font-[900] mt-4'>Our Clients Say!!!</p>
        <div className='mt-10'>
        <Swiper/>
        </div>
    </section>
  )
}

export default Testimonial