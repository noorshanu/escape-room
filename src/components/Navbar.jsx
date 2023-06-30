import React from 'react'
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineClose,
} from 'react-icons/ai'
import { BsTwitch } from 'react-icons/bs'
import { LiaBarsSolid } from 'react-icons/lia'
import { Disclosure } from '@headlessui/react'

const navigation = [
  { name: 'tokenomics', href: '#', current: false },
  { name: 'twitter', href: '#', current: false },
  { name: 'telegram', href: '#', current: false },
  { name: 'dapp', href: '#', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-[#B027FB] max-w-[90%] mx-auto rounded-[40px] fixed top-5 left-4 right-4 z-50"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl pr-4 md:px-6 lg:px-8 py-2">
            <div className="relative w-full flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center  p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset rounded-full focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <AiOutlineClose
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <LiaBarsSolid
                      className="block h-6 w-6 text-white"
                      color="white"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
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
                        : 'text-[#b027fb] bg-white  market txt hover:bg-black hover:border hover:border-[#433838] hover:text-[#fff] hover:border-b-4 rounded-full',
                      ' px-3 py-2 text-sm font-modak',
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}

                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : ' hover:bg-gray-700 text-white',
                    'block rounded-md px-6 py-2 text-lg tracking-wider font-modak',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
