import React from 'react'
import Button from "../componentsSingle/Button"
import img from "../assets/hero.png"
import OurServices from "../componentGroup/OurServices"
import AboutUs from "../componentGroup/AboutUs/AboutUs"
import FoodMenu from "../componentGroup/FoodMenu/FoodMenu"
import Contact from "../componentGroup/Contact/Contact"
import TeamMembers from "../componentGroup/TeamMembers/TeamMember"
import Testimonial from "../componentGroup/Testimonial/Testimonial"
import Footer from "../componentGroup/Footer/Footer"

const Home = () => {
  return (
    <div>
       <div className='relative h-[900px] sm:h-[1200px] md:h-[1400px] lg:h-[800px]    bg-[url("./assets/bg-hero.jpg")] bg-no-repeat bg-cover bg-center text-white overflow-x-hidden '>
       <main className='bg-[#0f172bde] w-full h-full flex flex-col lg:flex-row items-center justify-center md:justify-center gap-11 md:gap-5 sm:gap-0 pt-[3rem] md:pt-[10rem] lg:pt-10 lg:px-5'>
            <div className='flex flex-col items-center justify-center gap-8 w-full  lg:w-full lg:items-start'>
                <h1 className=' lg:text-left text-center text-4xl md:text-6xl font-[800] px-8 sm:px-6'>Enjoy Our Delicious Meal</h1>
                <p className='text-center font-bold  lg:text-left px-5'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <div className='pl-5'>
                <Button>BOOK A TABLE</Button>
                </div>
            </div>
            <div className='w-full lg:w-full'>
                <div className='p-6 sm:px-16'>
                    <img src={img} alt="Food Tray" className='animate-spin-slow w-full h-full object-cover'/>
                </div>
            </div>
        </main>
       </div>
       <section className='px-4'>
        <div className='my-20'>
        <OurServices/>
        </div>
        <div>
            <AboutUs/>
        </div>
        <div>
            <FoodMenu/>
        </div>
        <div className='my-20'>
            <Contact/>
        </div>
        <div>
            <TeamMembers/>
        </div>
        <div className='my-20'>
            <Testimonial/>
        </div>
       
       </section>
       <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Home