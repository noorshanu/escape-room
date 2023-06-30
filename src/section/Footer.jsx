import React from 'react'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { BsTwitch } from 'react-icons/bs'
const Footer = () => {
  let btns = ['Buy Now', 'Telegram', 'Twitter', ]
  return (
    <div className="max-w-6xl mx-auto mt-8 sm:mt-20 px-8 pb-4">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-x-8">
        <div className="md:col-span-2 place-self-center">
          <img src="/images/logo.png" className="w-full h-auto" alt='' />
        </div>
        <div className="md:col-span-7 place-self-center ">
          <div>
            <h1 className="text-3xl sm:text5xl lg:text-6xl text-center md:text-start about-head font-modak sm:text-8xl">
              Join the Escape <br/> Room Now
            </h1>
          </div>
          <p className="text-black font-arch mt-4">
            Escape the ordinary. Join Escape Room today and unleash your inner
            problem-solver. Dare to conquer the challenges, unravel the
            mysteries, and embrace the ultimate escape adventure. Experience the
            thrill now!
          </p>
          <div className="flex gap-x-2 mt-5 justify-center md:justify-start flex-wrap sm:flex-nowrap gap-y-2">
            {btns.map((text) => {
              return (
                <button
                  className={
                    'bg-white hover:bg-black h-min hover:border-transparent group border border-[#433838] text-[#433838]  hover:text-white border-b-4  rounded-full  px-3 flex justify-center py-2 text-lg font-modak'
                  }
                >
                  {text}
                </button>
              )
            })}
          </div>
        </div>
        <div className="md:col-span-3 place-self-center md:place-self-end mt-4 sm:mt-16">
          <img
            src="/images/welcome.svg"
            className="w-full h-auto rotate-[5.7deg]"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
