import React from 'react'

function Roadmap() {
  return (
    <>
      <img src="images/road.png" alt="" className="w-full relative z-10" />
      <div className='bg-[url("/public/images/cardsFrame.svg")] bg-cover'>
        <div className="flex max-w-7xl flex-wrap mx-auto pb-16 pt-52 lg:h-[800px] gap-x-[4%] px-10">
          <img src="/images/card1.svg" className="w-full lg:w-[22%] sm:w-[47%] h-auto place-self-start" />
          <img src="/images/card2.svg" className="w-full lg:w-[22%] sm:w-[47%] h-auto place-self-end" />
          <img src="/images/card3.svg" className="w-full lg:w-[22%] sm:w-[47%] h-auto place-self-center" />
          <img src="/images/card4.svg" className="w-full lg:w-[22%] sm:w-[47%] h-auto place-self-end" />
        </div>
      </div>
    </>
  )
}

export default Roadmap
