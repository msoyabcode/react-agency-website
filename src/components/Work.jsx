import React from 'react'
import { workItems } from '../assets/assets'

const Work = () => {
  return (
    <div id='work' className='py-20'>
        <div className='container mx-auto px-6 sm:px-14 md:px-24 lg:px-40'>
            <div className='text-center mb-16'>
                <h1 className='text-4xl md:text-5xl text-dark mb-6'>Our latest work</h1>
                <p className='text-dark/60 max-w-2xl mx-auto text-xl'>Whether you're launching a new business or looking to elevate your existing brand</p>
            </div>

            {/*Work Section  */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                {
                    workItems.map((item, index)=>{
                        return <div key={index} className='rounded-xl overflow-hidden cursor-pointer
                        border border-primary/50 hover:scale-105 transition duration-300 gap '>
                            <img src={item.image} alt="" />
                            <div className='mt-6 px-6'>
                                <h1 className='text-xl mb-4 text-dark'>{item.title}</h1>
                                <p className='text-dark/60 mb-4'>{item.description}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Work
