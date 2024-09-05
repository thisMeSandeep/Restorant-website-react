import React from 'react'
import Hero from "../componentGroup/Hero"
import AboutUs from "../componentGroup/AboutUs/AboutUs"
import TeamMember from '../componentGroup/TeamMembers/TeamMember'
import Footer from '../componentGroup/Footer/Footer'

const About = () => {
  return (
    <div>
      <main>
        <Hero heading={"About Us"} page={"ABOUT"} />
      </main>
      <section className='px-4'>
        <div className='mt-20 '>
          <AboutUs />
        </div>
        <div className='mt-20'>
          <TeamMember />
        </div>
      </section>
      <footer className='mt-20'>
        <Footer />
      </footer>
    </div>

  )
}

export default About