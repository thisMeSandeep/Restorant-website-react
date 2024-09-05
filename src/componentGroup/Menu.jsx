import React from 'react'
import MenuCard from "../componentsSingle/MenuCard"
import img1 from "../assets/menu-1.jpg"
import img2 from "../assets/menu-2.jpg"
import img3 from "../assets/menu-3.jpg"
import img4 from "../assets/menu-4.jpg"
import img5 from "../assets/menu-5.jpg"
import img6 from "../assets/menu-6.jpg"
import img7 from "../assets/menu-7.jpg"
import img8 from "../assets/menu-8.jpg"

const Menu = () => {
  return (
    <div className='  flex flex-col md:flex-row items-center justify-between  flex-wrap gap-5'>
        <MenuCard img={img1}/>
        <MenuCard img={img2}/>
        <MenuCard img={img3}/>
        <MenuCard img={img4}/>
        <MenuCard img={img5}/>
        <MenuCard img={img6}/>
        <MenuCard img={img7}/>
        <MenuCard img={img8}/>
    </div>
  )
}

export default Menu