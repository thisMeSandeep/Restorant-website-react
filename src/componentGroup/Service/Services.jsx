import React from 'react'
import OurServices from "../OurServices"

const Services = () => {
  return (
    <section>
        <p className='text-center font-cursive text-orange text-lg md:text-2xl'>Our Services</p>
        <p className='text-center text-3xl md:text-4xl lg:text-5xl font-[800] md:font-[900] mt-4'>Explore Our Services</p>
        <div className='mt-5'>
            <OurServices/>
        </div>
        <div className='mt-5'> 
            <OurServices/>
        </div>
    </section>
  )
}

export default Services