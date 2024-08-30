'use client'
import Link from 'next/link'
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

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
      <div className="flex items-start justify-between p-8">
                  
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
    <div className='cursor-pointer' onClick={() => setShowModal(true)}><Bars3Icon className="block h-20 w-20" aria-hidden="true" /></div>
    
                  </div>

        <>
          <div
            className={showModal ? `menufadeUp-animation h-screen overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none` : 'hidden'}
          >
            <div className="relative w-screen h-screen">
              {/*content*/}
              <div className="shadow-lg relative flex flex-col w-full h-full bg-[#6272B6]">
                {/*header*/}
                <div className="flex items-start justify-between p-8">
                  
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
              <div className='cursor-pointer' onClick={() => setShowModal(false)} >

              <XMarkIcon className="block h-20 w-20 cursor-pointer" aria-hidden="true" />
              </div>
                </div>
                {/*body*/}
                <div className="relative p-6 h-screen flex flex-col items-stretch">
                  <div className='ml-auto mr-[5%]'>
                    <div className='flex flex-col text-right'>
                      
                {navigation.map((item) => (
                      <Link key={item.name} href={`${item.href}`}
                      className={showModal ? `fadeInUp-animation-slower text-5xl text-hmpgBauk lg:text-9xl uppercase font bold text-white hover:text-[#231F20] transition duration-700` : `text-5xl text-hmpgBauk  lg:text-9xl uppercase font bold text-white hover:text-[#231F20] transition duration-700`}
                      /*
                      className={classNames(
                        item.current ? 'bg-gray-900 text-stone-950' : 'text-stone-950 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-lg font-medium'
                      )}*/
                      aria-current={item.current ? 'page' : undefined}
                      >{item.name}</Link>
                    ))}
                    </div>

                  </div>
                  <div className='mt-auto'>
                    <div className='flex flex-col-reverse lg:flex-row'>
                      <div className={showModal ? ` md:flex-row lg:flex-col fadeInUp-animation-slower flex flex-col ml-2 lg:ml-20 mr-5` : `flex flex-col ml-2 lg:ml-20 mr-5`}>
                        <div className='group text-hmpgBauk text-lg lg:text-xl text-[#231F20] transition duration-300 '><a className=' flex flex-row' href='https://www.instagram.com/valbuiofficial/'>INSTAGRAM  <ChevronRightIcon className="h-6 w-6" aria-hidden="true" /></a><span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#231F20]"></span></div>
                        <div className='group text-hmpgBauk text-lg lg:text-xl text-[#231F20] transition duration-300'><a className=' flex flex-row' href='https://www.behance.net/ValBuiOfficial'>BEHANCE  <ChevronRightIcon className="h-6 w-6" aria-hidden="true" /></a><span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#231F20]"></span></div>
                        <div className='group text-hmpgBauk text-lg lg:text-xl text-[#231F20] transition duration-300'><a className=' flex flex-row' href='https://www.linkedin.com/in/val-bui/'>LINKEDIN  <ChevronRightIcon className="h-6 w-6" aria-hidden="true" /></a><span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#231F20]"></span></div>
                      </div>
                      <div className={showModal ? `fadeInUp-animation-slower flex flex-col mt-auto ml-2 mb-4  lg:ml-10` : `flex flex-col mt-auto ml-2 mb-4  lg:ml-10`}>
                        <a href="mailto:valbuiofficial@gmail.com" className="text-hmpgBauk font-semibold text-[#231F20] text-xl lg:leading-none lg:text-xl">
                          valbuiofficial@gmail.com
                        </a>
                          <p className=" text-hmpgBauk font-semibold text-[#231F20] text-xl lg:leading-none lg:text-xl">+1 (480) 229 3403</p>
                      </div>
                  </div>
                  </div>
                </div>
                {/*footer
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
                </div>*/}
              </div>
            </div>
          </div>
        </>
    </>
  )
}
