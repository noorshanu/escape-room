import React from 'react'

const Cards = () => {
  return (
    <div className='bg-[url("/public/images/cardsFrame.svg")] bg-cover'>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 max-w-6xl mx-auto py-16">
        <img src='/images/card1.svg' className='w-full h-auto'/>
      </div>
    </div>
  )
}

export default Cards
