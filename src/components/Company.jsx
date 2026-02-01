import React from 'react'
import { FaMicrosoft,FaFacebook, FaLinkedin, FaApple, FaInstagram, FaGoogle, FaGoogleDrive } from "react-icons/fa";

const Company = () => {
  return (
    <div className='py-20 bg-white'>
      <div className='container mx-auto p-6'>
        <p className='text-xl text-center md:text-2xl mb-16'>Trusted by leading companies</p>
        {/* company icons */}
        <div className='flex flex-wrap items-center justify-center gap-12'>
          <div className='w-20 h-20 border border-primary/60 rounded-full flex text-center justify-center items-center hover:scale-105 cursor-pointer duration-300 transition   '>
            <FaMicrosoft className='w-10 h-10 text-primary'/>
          </div>
           <div className='w-20 h-20 border border-primary/60 rounded-full flex text-center justify-center items-center hover:scale-105 cursor-pointer duration-300 transition   '>
            <FaFacebook className='w-10 h-10 text-primary'/>
          </div>
           <div className='w-20 h-20 border border-primary/60 rounded-full flex text-center justify-center items-center hover:scale-105 cursor-pointer duration-300 transition   '>
            <FaLinkedin className='w-10 h-10 text-primary'/>
          </div>
           <div className='w-20 h-20 border border-primary/60 rounded-full flex text-center justify-center items-center hover:scale-105 cursor-pointer duration-300 transition   '>
            <FaApple className='w-10 h-10 text-primary'/>
          </div>
           <div className='w-20 h-20 border border-primary/60 rounded-full flex text-center justify-center items-center hover:scale-105 cursor-pointer duration-300 transition   '>
            <FaInstagram className='w-10 h-10 text-primary'/>
          </div>
           <div className='w-20 h-20 border border-primary/60 rounded-full flex text-center justify-center items-center hover:scale-105 cursor-pointer duration-300 transition   '>
            <FaGoogle className='w-10 h-10 text-primary'/>
          </div>
           <div className='w-20 h-20 border border-primary/60 rounded-full flex text-center justify-center items-center hover:scale-105 cursor-pointer duration-300 transition   '>
            <FaGoogleDrive className='w-10 h-10 text-primary'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company
