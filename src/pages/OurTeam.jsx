import React from 'react'
import Hero from '../componentGroup/Hero'
import Footer from '../componentGroup/Footer/Footer'
import TeamMember from '../componentGroup/TeamMembers/TeamMember'

const OurTeam = () => {
  return (
    <div>
        <main>
            <Hero heading={"Our Teams"} page={"PAGE"}/>
        </main>
        <section className='mt-20 px-4'>
           <TeamMember/>
        </section>
        <footer className='mt-20'>
           <Footer/>
        </footer>
    </div>
  )
}

export default OurTeam