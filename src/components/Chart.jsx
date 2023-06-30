import React from 'react'
import Marquee from "react-fast-marquee";
function Chart() {
  return (
    <>
     <div className="bg-[#FF768C] pt-3 pb-3  relative z-10">
        <Marquee>
          <h1 className="text-[#fff] font-modak text-4xl sm:text-6xl txt2 overflow-hidden ">Tokenomics · Tokenomics · Tokenomics · Tokenomics · Tokenomics · Tokenomics · Tokenomics · Tokenomics · </h1>
        </Marquee>
      </div>

<section className='pt-12 bg-[#b7e3ff]  pb-16 relative'>
      <img src="images/icons/img1.png" alt="" className=' absolute top-[14%] left-[9%]'/>
      <img src="images/icons/img2.png" alt="" className=' absolute top-[26%] right-[5%]'/>
      <img src="images/icons/star.png" alt="" className=' absolute top-[46%] left-[3%]' />
        <div className='container-wrapper'>
            <div className='text-center mt-16 '>
                <img src="images/chart.png" alt="" className='mx-auto  z-10 relative'/>
            </div>

        </div>
        <div className='w-full absolute bottom-0'>

        <img src="images/about-bg.png" alt=""  className='w-full mx-auto text-center'/>
        </div>
        <img src="images/icons/star.png" alt="" className=' absolute top-[82%] right-[22%]' />
        <img src="images/icons/half.png" alt="" className=' absolute top-[84%] left-0' />
    </section>
    </>
   
  )
}

export default Chart