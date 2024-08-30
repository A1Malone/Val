'use client'
import Link from 'next/link'
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Gallery', href: '/gallery', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Nav() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <div className="max-w-7xl px-2 lg:py-8 sm:px-6 lg:px-8">
    <div className="relative flex h-20 items-center justify-between">
    <Link href="/">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-16 lg:h-18 lg:hidden"
                    src="/assets/signature-C.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-14 lg:h-20 lg:block"
                    src="/assets/signature-C.png"
                    alt="Your Company"
                  />
                </div>

    </Link>
    <div onClick={() => setShowModal(true)}><Bars3Icon className="block h-6 w-6" aria-hidden="true" /></div>
    
    </div>
    </div>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open large modal
      </button>
      {showModal ? (
        <>
          <div
            className="h-screen justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-screen h-screen">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  
                <Link href="/">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-16 lg:h-18 lg:hidden"
                    src="/assets/signature-C.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-14 lg:h-20 lg:block"
                    src="/assets/signature-C.png"
                    alt="Your Company"
                  />
                </div>

              </Link>
              <div onClick={() => setShowModal(false)} className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">

              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              </div>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                {navigation.map((item) => (
                      <Link key={item.name} href={`${item.href}`}
                      className='group text-sky-600 transition duration-300'
                      /*
                      className={classNames(
                        item.current ? 'bg-gray-900 text-stone-950' : 'text-stone-950 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-lg font-medium'
                      )}*/
                      aria-current={item.current ? 'page' : undefined}
                      >{item.name}<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span></Link>
                    ))}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
