import React from 'react'
import Marquee from "react-fast-marquee";


function Roadmap() {
  return (
    <>
    
      <div className="bg-[#b027fb] pt-3 pb-3  relative z-10">
        <Marquee>
          <h1 className="text-[#fff] font-modak text-4xl sm:text-6xl txt2 overflow-hidden ">Road map · Road map · Road map · Road map · Road map · Road map · Road map · Road map · </h1>
        </Marquee>
      </div>
      <div className='bg-[url("/public/images/road-bg.png")] bg-cover relative pb-8'>
        <img src="images/icons/img4.png" alt="" className=' absolute left-[44%] top-[13%] hidden sm:block' />
        <img src="images/icons/star1.png" alt="" className=' absolute right-[12%] top-[29%] h-[65px] hidden sm:block' />
        <img src="images/icons/ups.png" alt="" className=' absolute right-[26%] top-[30%]  hidden sm:block' />
        <div className="flex max-w-7xl flex-wrap mx-auto pb-16 pt-16 lg:h-[700px] gap-x-[4%] px-10">
          <img src="/images/card1.png" className="w-full lg:w-[22%] sm:w-[47%] h-auto place-self-start" alt='' />
          <img src="/images/card2.png" className="w-full lg:w-[22%] sm:w-[47%] h-auto place-self-end" alt='' />
          <img src="/images/card3.png" className="w-full lg:w-[22%] sm:w-[47%] h-auto place-self-center"  alt=''/>
          <img src="/images/card4.png" className="w-full lg:w-[22%] sm:w-[47%] h-auto place-self-end"  alt=''/>
        </div>
        <div className='flex justify-center gap-8 pt-4'>
          <a target='_blank' href="https://escaperoometh.gitbook.io/docs/" className='ml-2 bg-white border hover:bg-black hover:text-white border-[#433838] text-[#433838]   border-b-4  rounded-full  px-5  flex justify-center py-2.5 text-xl font-modak'> Read More</a>
          <a target='_blank' href="/" className='ml-2 bg-white border hover:bg-black hover:text-white border-[#433838] text-[#433838]   border-b-4  rounded-full  px-5  flex justify-center py-2.5 text-xl font-modak'> Buy Now</a>
        </div>
        <img src="images/icons/low.png" alt="" className=' absolute left-[22%] top-[70%] hidden sm:block' />
      </div>
    </>
  )
}

export default Roadmap
