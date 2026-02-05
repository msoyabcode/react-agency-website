import React from 'react'
import { FaArrowRight, FaUser } from 'react-icons/fa'

const Contact = () => {
  return (
    <div id='contact' className='bg-white  py-16'>
        <div className='container mx-auto px-6'>
            <div className='text-center '>
                <h1 className='text-4xl md:text-5xl text-dark mb-6'>Reach out to us</h1>
                <p className='text-dark/60 max-w-xl mx-auto'>Let’s talk! Whether it’s a quick question or a big project, we’re just a message away.</p>
            </div>  

               {/* Contact Form */}
               <div className='max-w-2xl mx-auto mt-12'>
                 <form>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <label htmlFor="name" className='text-dark block mb-2'>Your Name</label>
                        <div className='flex gap-4 py-2 pl-4 border rounded border-dark/40'>
                            <FaUser />
                            <input 
                            className='w-full outline-none placeholder:text-dark/60 placeholder:text-sm'
                            type="text" id='name' placeholder='Enter your name'  />
                        </div>
                    </div>

                    <div>
                         <label htmlFor="email" className='text-dark block mb-2 '>Your Email</label>
                        <div className='flex gap-4 py-2 pl-4 border rounded border-dark/40'>
                            <FaUser />
                            <input 
                            className='w-full outline-none placeholder:text-dark/60 placeholder:text-sm'
                            type="email" id='email' placeholder='Enter your email'  />
                        </div>
                    </div>    
                </div>

                {/* message box */}
                <div className='mt-6 '>
                    <label htmlFor="msg" className='block text-dark mb-2 '>Your message</label>
                    <textarea className='w-full h-40 outline-none border border-dark/40 px-6 py-6 rounded' placeholder='Enter your message...' id="msg"></textarea>
                </div>

                <button className='bg-primary px-6 py-2.5 rounded-full text-dark font-semibold cursor-pointer flex items-center gap-2 mt-6'>
                    Submit
                    <FaArrowRight />
                </button>
            </form>
               </div>
        </div>
    </div>
  )
}

export default Contact
