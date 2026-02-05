import React from 'react'
import { teams } from '../assets/assets'

const Teams = () => {
  return (
    <div id='team' className='bg-white py-20'>
        <div className='container mx-auto  px-6 sm:px-12 md:px-24 lg:px-40'>
            <div className='text-center mb-16'>
                <h1 className='text-4xl md:text-5xl text-dark mb-6'>Meet the team</h1>
                <p className='text-dark/60 max-w-xl mx-auto text-xl'>Behind every successful project is a passionate and skilled team — and ours is no exception.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
                {
                    teams.map((item,index)=>{
                        return <div key={index} className=' rounded-xl overflow-hidden p-6 border border-primary/50 bg-white
                        flex items-center gap-6 cursor-pointer hover:scale-105 transition duration-300'>
                            <img className='w-12 h-12 rounded-full object-cover' src={item.image} alt="" />
                            <div>
                                <h1 className='text-sm text-dark font-semibold'>{item.name}</h1>
                                <p className='text-sm text-dark/60'>{item.designation}</p>
                            </div>
                             </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Teams
