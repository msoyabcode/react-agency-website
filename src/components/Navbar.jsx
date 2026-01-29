import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

export default function Navbar() {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='w-full fixed top-0 z-50  backdrop-blur-2xl'>
        <div className='flex items-center justify-between px-6 py-8 sm:px-14 md:px-24 lg:px-40 '>

            {/* left  */}
            <div>
                <span className='text-3xl font-bold text-dark'>Brightmatter.io</span>
                <div className='bg-primary w-4 h-4 rounded-full'></div>
            </div>

            {/* mid */}
            <div>
              <ul className='hidden md:flex items-center text-lg gap-5 font-semibold text-dark/80  '>
                <li>Home</li>
                <li>Service</li>
                <li>Work</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* right */}
            <div className='hidden md:block '>
              <button className='bg-primary flex items-center gap-2 px-7 py-2 rounded-full text-dark font-semibold  cursor-pointer '>Contact Me <FaArrowRight /> </button>
            </div>

            {/* Mobile  verion */}
            <div className='md:hidden '>
              {
                showMenu? 
                <FaXmark onClick={()=>setShowMenu(!showMenu)} className='text-xl text-dark' />: 
                <FaBars onClick={()=> setShowMenu(!showMenu)} className='text-xl text-dark' />
              }
            </div>

        </div>

        {/* mobile version toggle */}
        {showMenu &&(
          <div className='md:hidden '>
             <ul className='flex justify-center items-center gap-4 bg-amber-100  p-3 text-lg font-semibold '>
            <li>Home</li>
            <li>Service</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
          </div>
        )
         }
    </div>
  )
}
