import React from 'react'
import { assets } from "../assets/assets";


const Hero = () => {
  return (
    <div className='w-full py-40'>
        <div className='mx-auto px-6'>
            <div>
                <div className='flex items-center justify-center border mx-auto gap-4 border-primary/60 rounded-full pl-2 py-2 w-full text-xs md:text-base md:w-[25%] mb-12'>
                    <div className='flex items-center -space-x-3 '>
                        <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile1Img} alt="hero" />
                        <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile2Img} alt="hero" />
                        <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile3Img} alt="hero" />
                        <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile4Img} alt="hero" />
                    </div>
                    <span>Trusted by 20k+ peoples</span>
                </div>
                <div>
                    <h1 className='text-center text-dark text-4xl sm:text-5xl md:text-6xl'>
                        <span>We Help Brands Grow With</span>
                        <br />
                        <span className='text-primary'>Performance</span>
                        <span>Marketing</span>
                    </h1>
                    <p className=''>At our agency, we take pride in delivering impactful solutions that combine creativity, strategy, and technology.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
