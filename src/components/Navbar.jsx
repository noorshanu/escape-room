import React from 'react'

const navigation = [
  { name: 'Tokenomics', href: '#tokenomics', current: false },
  { name: 'Twitter', href: 'https://twitter.com/EscapeRoomETH', current: false },
  { name: 'Telegram', href: 'https://t.me/escaperoometh', current: false },
  { name: 'Dapp', href: '#', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <nav className="bg-[#B027FB] max-w-[90%] mx-auto rounded-[40px] fixed top-5 left-4 right-4 z-30">
      <div className="mx-auto max-w-7xl pr-4 md:px-6 lg:px-8 py-2">
        <div className="relative w-full flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <img src="/images/logo.svg" className="h-[75%] w-auto" alt="" />
          </div>
          <div className="hidden absolute inset-y-0 right-0 md:flex items-center gap-1 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-white border border-[#433838] text-[#433838]   border-b-4  rounded-full'
                    : 'text-[#b127fbce] bg-white  market txt hover:bg-black hover:border hover:border-[#433838] hover:text-[#fff] hover:border-b-4 rounded-full',
                  ' px-3 py-2 text-sm font-modak',
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}

           
          </div>
        </div>
      </div>
    </nav>
  )
}
