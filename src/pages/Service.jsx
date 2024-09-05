import React from 'react'
import Hero from "../componentGroup/Hero"
import Services from "../componentGroup/Service/Services"
import Footer from "../componentGroup/Footer/Footer"

const Service = () => {
  return (
    <main>
       <Hero heading={"Services"} page={"SERVICE"}/> 
       <section className='px-4'>
       <div className='mt-20'>
        <Services/>
       </div>
      
       </section>
       <div className='mt-20'>
        <Footer/>
       </div>
    </main>
  )
}

export default Service