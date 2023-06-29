import React from 'react'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { BsTwitch } from 'react-icons/bs'
const Footer = () => {
  let socialIcons = [AiOutlineTwitter, AiOutlineInstagram, , BsTwitch]
  return (
    <div className="max-w-5xl mx-auto mt-8 sm:mt-20 px-8 pb-4">
      <div className="grid md:grid-cols-10 grid-cols-1 gap-x-5">
        <div className="md:col-span-7  ">
          <div>
            <h1 className="text-3xl sm:text5xl lg:text-6xl bg-gradient-to-r from-[#000000] via-[#9DD6FF] to-[#B027FB] text-clip text-transparent bg-clip-text font-bold font-caprasimo">
              WELCOME TO THE{' '}
            </h1>
            <h1 className="text-3xl sm:text5xl lg:text-6xl bg-gradient-to-r from-[#000000] via-[#9DD6FF] to-[#B027FB] text-clip text-transparent bg-clip-text font-bold font-caprasimo">
              ESCAPE ROOM
            </h1>
          </div>
          <p className="text-black font-arch mt-20">
            Lorem ipsum dolor sit amet consectetur. Nunc felis ut donec
            bibendum. Est nunc quam vitae lacus amet posuere id eu. Ac volutpat
            viverra quis eget a pellentesque adipiscing tristique. Tempus
            adipiscing habitant euismod egestas lec.
          </p>
          <div className="flex gap-x-2 mt-5">
            {socialIcons.map((Icon) => {
              return (
                <button
                  className={
                    'bg-white border border-[#433838] text-[#433838]   border-b-4  rounded-full  px-3 w-16 flex justify-center py-2 text-lg font-modak'
                  }
                >
                  <Icon className="" />
                </button>
              )
            })}
          </div>
        </div>
        <div className="md:col-span-3 place-self-end mt-16">
          <img
            src="/images/welcome.svg"
            className="w-full h-auto rotate-[5.7deg]" alt=''
          />
        </div>
      </div>
      <div className="flex justify-center flex-col gap-y-1 sm:justify-between items-center sm:flex-row max-w-2xl">
        <img src="/images/logo.svg" className=" h-inherit w-auto"  alt=''/>
        <div className="flex">
          <button
            className={
              'bg-black text-white rounded-full h-fit px-3  py-2 text-lg font-modak'
            }
          >
            marketplace
          </button>
          <button
            className={
              'ml-2 bg-white border border-[#433838] text-[#433838]   border-b-4  rounded-full  px-3  flex justify-center py-2 text-lg font-modak'
            }
          >
            wallet
          </button>
        </div>
        <img src="/images/line.svg" className="sm:mb-12 hidden sm:block" alt='' />
      </div>
    </div>
  )
}

export default Footer
