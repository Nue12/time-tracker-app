import React from 'react'
import workImg from '../../public/images/icon-work.svg'
import escImg from '../../public/images/icon-ellipsis.svg'
import trackingData from '../../data.json'

export default function TimeTrackTable({method}) {
  const timeTracking = trackingData.map(data => {
    let timeSpendCurrent;
    let timeSpendPrevious;
    let previousDuration;
    if(method === 'daily') {
      timeSpendCurrent = data.timeframes.daily.current;
      timeSpendPrevious = data.timeframes.daily.previous;
      previousDuration = 'yesterday';
    } else if(method === 'weekly') {
      timeSpendCurrent = data.timeframes.weekly.current;
      timeSpendPrevious = data.timeframes.weekly.previous;
      previousDuration = 'Last week';
    } else if(method === 'monthly') {
      timeSpendCurrent = data.timeframes.monthly.current;
      timeSpendPrevious = data.timeframes.monthly.previous;
      previousDuration = 'Last month';
    }
    return(
      <section className=' relative mb-28 max-w-sm m-auto sm:w-60 sm:mb-36' key={data.title}>
        <div className={` z-0 ${data.color} h-14 flex items-center overflow-hidden rounded-xl`}>
          <img src={`../../public/images/icon-${data.title.replace(" ", "-")}.svg`} alt='bgImgs' className='pl-48' />
        </div>
        <div className=' py-7 bg-neutral-Dark-blue z-10 absolute -bottom-24 w-full px-7 rounded-xl sm:-bottom-32'>
          <div className=' mb-1 flex items-center justify-between sm:mb-3'>
            <p className=' font-medium'>{data.title}</p>
            <img src={escImg} alt='esc' className='cursor-pointer' />
          </div>
          <div className='flex items-center justify-between sm:flex-col sm:items-start'>
            <h1 className=' text-3xl sm:text-4xl'>{timeSpendCurrent}hrs</h1>
            <p className='text-gray-400 font-normal'>{previousDuration} - {timeSpendPrevious}hrs</p>
          </div>
        </div>
      </section>
    )
  })
  return (
    <div className=' flex-wrap sm:flex mt-24 sm:mt-0 max-w-3xl'>
      {timeTracking}
    </div>
  )
}
