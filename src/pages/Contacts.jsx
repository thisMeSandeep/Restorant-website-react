import React from 'react'
import Hero from '../componentGroup/Hero'
import Contact from "../componentGroup/Contact/Contact"
import Footer from '../componentGroup/Footer/Footer'

const Contacts = () => {
  return (
    <div >
        <main>
            <Hero heading={"Contact Us"} page={"CONTACT"}/>
        </main>
        <section className='mt-20 px-4'>
          <Contact/>
        </section>
        <footer className='mt-20'>
          <Footer/>
        </footer>
    </div>
  )
}

export default Contacts