import React from 'react'
import Teams from "../Teams"

const TeamMember = () => {
  return (
    <section>
      <p className='text-center font-cursive text-orange text-lg md:text-2xl'>Team members</p>
      <p className='text-center text-3xl md:text-4xl lg:text-5xl font-[800] md:font-[900] mt-4 '>Our Master Chefs</p>
      <div className='mt-16'>
      <Teams/>
      </div>
      
    </section>
  )
}

export default TeamMember