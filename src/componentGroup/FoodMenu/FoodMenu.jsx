import React from 'react'
import MenuCategories from "../MenuCategories"
import Menu from "../Menu"

const FoodMenu = () => {
    return (
        <section>
            <p className='text-center font-cursive text-orange text-lg md:text-2xl'>Food Menu</p>
            <p className='text-center text-3xl md:text-4xl lg:text-5xl font-[800] md:font-[900] mt-4'>Most Popular Items</p>
            <div className='mt-10'>

                <MenuCategories />

            </div>
            <div className='mt-16'>
                <Menu />
            </div>

        </section>
    )
}

export default FoodMenu