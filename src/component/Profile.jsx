import React from 'react'
import profilePicture from '../../images/image-jeremy.png'

export default function Profile({setMethod, method}) {
  if(method === 'weekly') {
    const weeklyFocus = 'text-white';
  }
  return (
    <div className=' sm:mr-20 mx-auto max-w-sm sm:mt-48 sm:mx-0 lg:mt-16'>
      <section className=' relative sm:w-60'>
        <div className=' bg-neutral-Dark-blue w-full px-7 rounded-xl'>
          <div className='flex justify-between pt-12 pb-6 sm:flex-col sm:items-start'>
            <button onClick={() => {setMethod("daily")}} className={`text-gray-300 focus:text-white `}>Daily</button>
            <button onClick={() => {setMethod("weekly")}} className={`py-3 text-gray-300 focus:text-white `}>Weekly</button>
            <button onClick={() => {setMethod("monthly")}} className={`text-gray-300 focus:text-white`}>Monthly</button>
          </div>
        </div>
        <div className='bg-primary-Blue flex items-center space-x-4 rounded-xl p-5 -mt-44 sm:flex-col sm:items-start sm:px-2 sm:-mt-80'>
          <img src={profilePicture} alt='profilePicture'  className='w-16 border-2 border-white rounded-full sm:ml-2'/>
          <div>
            <p className=' text-gray-400'>Report for</p>
            <h1 className=' text-xl sm:text-3xl'>Jeremy Robson</h1>
          </div>
        </div>
      </section>
    </div>
  )
}
