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
  { name: 'marketplace', href: '#', current: false },
  { name: 'wallet', href: '#', current: true },
  { name: 'menu', href: '#', current: false },
]
let socialIcons = [AiOutlineTwitter, AiOutlineInstagram, BsTwitch]
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
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-2">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
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
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 order-2 md:order-1 items-center">
                  {socialIcons.map((Icon) => {
                    return (
                      <div className="bg-white border border-[#433838] border-b-4 px-2 py-2 h-9 w-9 mx-1 rounded-full text-[#433838]">
                        <Icon className="w-full h-auto" />
                      </div>
                    )
                  })}
                </div>
                <div className=" sm:ml-6 flex flex-grow ml-9  order-1 md:order-2 justify-start md:justify-center items-center h-max">
                  <img src="/images/logo.svg" className="h-[75%] w-auto" />
                </div>
              </div>
              <div className="hidden absolute inset-y-0 right-0 md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-white border border-[#433838] text-[#433838]   border-b-4  rounded-full'
                        : 'text-white hover:bg-white hover:border hover:border-[#433838] hover:text-[#433838] hover:border-b-4 rounded-full',
                      ' px-3 py-2 text-lg font-modak',
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
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
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
