import React from 'react'
import { services } from '../assets/assets'

const Services = () => {
  return (
    <div id='services' className='py-20'>
      <div className='container mx-auto px-6 sm:px-12 md:px-24 lg:px-40'>
        <div className='text-center mt-16'>
          <h1 className='text-dark text-4xl md:text-5xl mb-6'
          >How we can Help you?</h1>
          <p className='text-dark/60 text-xl max-w-2xl mx-auto'
          >Whether you're launching a new business or looking to elevate your existing brand.</p>
        </div>

        {/* service section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-16'>
          {
            services.map((service, index) =>{
              return (
              <div key={index} className='rounded-xl p-12 border border-primary
              flex flex-col md:flex-row items-center gap-6 hover:scale-105 duration-300 cursor-pointer'>
                <div className=' border-4 border-primary/80 rounded-full flex-shrink-0 w-20 aspect-square flex
                items-center justify-center '>
                  <service.icon className='w-10 h-10 text-primary' />
                </div>
                <div className='text-center md:text-start'>
                  <h1 className=' text-xl text-dark mb-3'>{service.title}</h1>
                  <p className=' text-dark/60 '>{service.description}</p>
                </div>
              </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Services
