import React from 'react';

const Hero = ({heading , page}) => {
  return (
    <div className='h-[60vh] w-full bg-[url("./assets/bg-hero.jpg")] bg-cover bg-center relative'>
    <div className='w-full h-full absolute top-0 left-0 bg-[#0f172bde] flex justify-center items-center flex-col gap-4'>
     <h1 className='text-5xl sm:text-7xl text-white font-bold'>{heading}</h1>
     <h5><span className='text-xl text-orange'>Home</span> <span className='text-xl text-gray'>/</span> <span className='text-xl text-orange'>Pages</span> <span className='text-xl text-gray'>/</span> <span className='text-white text-xl'>{page}</span></h5>
    </div>
    </div>
  );
};

export default Hero;
