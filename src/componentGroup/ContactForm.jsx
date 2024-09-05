import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex-grow mt-4 '>
       <p className='font-cursive text-orange text-xl md:text-3xl font-semibold'>Reservation</p>
       <p className='text-3xl font-[900] mt-5 mb-5'>Book A Table Online</p>
        <form action="#" className='flex flex-col gap-5'>
            <input type="text" name="name" placeholder='Your Name'  className='border border-[rgba(0,0,0,0.14)] p-5 text-lg focus:outline focus:outline-[#FFD08B] focus:outline-4  rounded-md text-gray'/>
            <input type="email" name="email" placeholder='Your Email'  className='border border-[rgba(0,0,0,0.15)] p-5 text-lg focus:outline focus:outline-[#FFD08B] focus:outline-4  rounded-md text-gray'/>
            <input type="text" name="subject" placeholder='subject' className='border border-[rgba(0,0,0,0.14)] p-5 text-lg focus:outline focus:outline-[#FFD08B] focus:outline-4 rounded-md text-gray ' />
            <textarea name="Message" placeholder='Message' className='border border-[rgba(0,0,0,0.14)] p-5 text-lg focus:outline focus:outline-[#FFD08B] focus:outline-4 rounded-md text-gray '/>
            <button role='submit' className='inline-block border bg-orange text-white text-xl p-5 rounded-md hover:bg-lightorange '>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm