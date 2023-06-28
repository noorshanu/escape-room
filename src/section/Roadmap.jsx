import React from 'react'

function Roadmap() {
  return (
    <>
      <img src="images/road.png" alt="" className="w-full relative z-10" />
      <div className='bg-[url("/public/images/road-bg.png")] bg-cover relative'>
        <img src="images/icons/img4.png" alt="" className=' absolute left-[44%] top-[13%]' />
        <img src="images/icons/star1.png" alt="" className=' absolute right-[12%] top-[29%] h-[65px]' />
        <img src="images/icons/ups.png" alt="" className=' absolute right-[26%] top-[30%] ' />
        <div className="flex max-w-7xl flex-wrap mx-auto pb-16 pt-16 lg:h-[700px] gap-x-[4%] px-10">
          <img src="/images/card1.svg" className="w-full lg:w-[22%] sm:w-[47%] h-auto place-self-start" alt='' />
          <img src="/images/card2.svg" className="w-full lg:w-[22%] sm:w-[47%] h-auto place-self-end" alt='' />
          <img src="/images/card3.svg" className="w-full lg:w-[22%] sm:w-[47%] h-auto place-self-center"  alt=''/>
          <img src="/images/card4.svg" className="w-full lg:w-[22%] sm:w-[47%] h-auto place-self-end"  alt=''/>
        </div>
        <img src="images/icons/low.png" alt="" className=' absolute left-[22%] top-[70%] ' />
      </div>
    </>
  )
}

export default Roadmap
