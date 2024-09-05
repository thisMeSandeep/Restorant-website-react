import React from 'react'
import ChefCard  from '../componentsSingle/ChefCard'
import img1 from "../assets/team-1.jpg"
import img2 from "../assets/team-2.jpg"
import img3 from "../assets/team-3.jpg"
import img4 from "../assets/team-4.jpg"

const Teams = () => {
  return (
    <div className='flex flex-col  md:flex-row flex-wrap gap-7 justify-center items-center'>
          <ChefCard img={img1} name={"Danial"} post={"Master Chef"}/>
          <ChefCard img={img2} name={"Peter"} post={"Expert Cook"}/>
          <ChefCard img={img3} name={"Joseph"} post={"Bar expert"}/>
          <ChefCard img={img4} name={"Jim"} post={"Master Chef"}/>
    </div>
  )
}

export default Teams