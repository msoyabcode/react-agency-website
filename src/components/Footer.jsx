import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='py-20'>
      <div className='container mx-auto px-6 sm:px-12 md:px-24 lg:px-40'>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-12 '>

            {/* left Section */}
            <div>
                <div className='mb-4'>
                    <span className='text-dark text-2xl font-semibold'>Brightmatter.io</span>
                    <div className='w-4 h-4 bg-primary rounded-full'></div>
                </div>
                <p className='mb-4 text-dark/60'>Whether you're launching a new business or looking to elevate your existing brand.</p>
                <div className='flex items-center gap-6 py-2 font-semibold text-dark/70'>
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#work">Our Work</a>
                    <a href="#contact">Contact us</a>
                </div>
                {/* <h1 className='text-2xl text-dark font-semibold'> Brightmatter.ai</h1>
                <div className='bg-primary w-4 h-4 rounded-full'></div>
                <p className='text-dark/60 py-5'>Whether you're launching a new business or looking to elevate your existing brand.</p>

                <ul className='flex gap-8 text-dark/80 font-semibold'>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Our Work</li>
                    <li>Contact us</li>
                </ul> */}
            </div>

            {/* right Section */}
            <div>
                <h3 className='text-dark text-xl font-semibold mb-3'>Subscribe to our newsletter</h3>
                <p className='text-sm text-dark/70'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className='mt-4 flex flex-col md:flex-row items-start gap-2'>
                    <input
                    className='w-full border border-dark/40 rounded outline-none px-6 py-3 placeholder:text-sm placeholder:text-dark/60'
                     type="email" 
                     placeholder='Enter your email'/>
                    <button className='px-6 py-3 bg-primary rounded text-dark cursor-pointer font-semibold'>Subscribe</button>
                </div>
            </div>
            {/* <div className=''>
                <h1 className='text-xl text-dark font-semibold'>Subscribe to our newsletter</h1>
                <p className='text-dark/60 py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <input
                className=' border border-dark/45 w-full h-13 pl-5 outline-none
                ' type="text" placeholder='Enter your Email' />
            </div> */}
        </div>

        <div className='mt-6 border-t border-t-dark/40 flex flex-col md:flex-row items-center justify-between gap-6 '>
        <p className='text-dark/70 py-4'>Copyright 2025 © TheAbhishekCodes - All Right Reserved.</p>
        <div className='flex items-center gap-4 text-xl text-primary'>
            <FaFacebook  className='cursor-pointer'/>
            <FaInstagram className='cursor-pointer'/>
            <FaLinkedin className='cursor-pointer'/>
            <FaGoogle className='cursor-pointer'/> 
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
