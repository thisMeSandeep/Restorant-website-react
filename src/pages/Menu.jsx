import React from 'react'
import Hero from "../componentGroup/Hero"
import FoodMenu from "../componentGroup/FoodMenu/FoodMenu"
import Footer from '../componentGroup/Footer/Footer'

const Menu = () => {
    return (
        <div>
            <main>
                <Hero heading={"Food Menu"} page={"MENU"} />
            </main>
            <section className='px-4'>
                <div className='mt-20'>
                <FoodMenu/>
                </div>
            </section>
            <footer className='mt-20'>
                <Footer/>
            </footer>
        </div>

    )
}

export default Menu