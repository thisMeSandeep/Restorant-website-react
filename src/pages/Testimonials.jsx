import React from 'react'
import Hero from '../componentGroup/Hero'
import Footer from '../componentGroup/Footer/Footer'
import Testimonial from '../componentGroup/Testimonial/Testimonial'
const Testimonials = () => {
  return (
    <div>
        <main>
            <Hero heading={"Testimonial"} page={"TESTIMONIAL"}/>
        </main>
        <section className='mt-20 px-4'>
            <Testimonial/>
        </section>
        <footer className='mt-20'>
            <Footer/>
        </footer>
    </div>
  )
}

export default Testimonials