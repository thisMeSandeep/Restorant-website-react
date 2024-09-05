import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Button from '../../componentsSingle/Button';

const Footer = () => {
    return (
        <footer className='flex items-baseline justify-between flex-col lg:flex-row gap-6 text-white bg-blue pt-20 pb-16 px-3'>
            <div>
                <h4 className='text-xl mb-2 font-cursive text-orange'>Company</h4>
                <ul className='space-y-2'>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Reservation</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Condition</li>
                </ul>
            </div>
            <div>
                <h4 className='text-xl mb-2 font-cursive text-orange'>Contact</h4>
                <ul className='space-y-2'>
                    <div className='flex items-center  gap-2'><IoLocationSharp />123 Street, New York ,USA</div>
                    <div className='flex items-center gap-2'><BsFillTelephoneFill /> +01234543287</div>
                    <div className='flex items-center  gap-2'><FaEnvelope />snayal50@gmail.com</div>
                    <div className='flex items-center gap-3'>
                        <FaTwitter className='text-orange hover:text-lightorange cursor-pointer hover:scale-110' />
                        <FaFacebookF className='text-orange hover:text-lightorange cursor-pointer hover:scale-110' />
                        <FaYoutube className='text-orange hover:text-lightorange cursor-pointer hover:scale-110' />
                        <FaLinkedinIn className='text-orange hover:text-lightorange cursor-pointer hover:scale-110' />
                    </div>

                </ul>
            </div>
            <div>
                <h4 className='text-xl mb-2 font-cursive text-orange'>Opening</h4>
                <ul className='space-y-2'>
                    <li>Monday-Saturday</li>
                    <li>09AM-09PM</li>
                    <li>Sunday</li>
                    <li>10AM-08PM</li>
                </ul>
            </div>
            <div>
                <h4 className='text-xl mb-2 font-cursive text-orange'>Newsletter</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <form action="#" className='flex items-center bg-white w-fit p-2 rounded-md mt-4'>
                    <input type="text" placeholder='Your Name' className='outline-none text-gray' />
                    <Button role='submit'>SIGNUP</Button>
                </form>

            </div>
        </footer>
    )
}

export default Footer