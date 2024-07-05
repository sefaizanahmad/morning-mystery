
import React from 'react'

export default function Navbar() {
  return (
    <nav className='shadow-sm flex flex-wrap items-center justify-between w-full cursor-pointer'>
      <div className='container flex justify-between '>
        <div className='mx-7'>
        <div className='flex text-3xl font-bold text-left '>
          <h1><span className='text-teal-500'>M</span></h1>
          <h1><span className='text-yellow-500'>O</span></h1>
          <h1><span className='text-pink-500'>R</span></h1>
          <h1><span className='text-orange-500'>N</span></h1>
          <h1><span className='text-pink-500'>I</span></h1>
          <h1><span className='text-teal-500'>N</span></h1>
          <h1><span className='text-pink-500'>G</span></h1>
        </div>
        <div className='flex text-3xl font-bold text-left '>
          <h1><span className='text-red-500'>M</span></h1>
          <h1><span className='text-teal-500'>Y</span></h1>
          <h1><span className='text-red-500'>S</span></h1>
          <h1><span className='text-blue-500'>T</span></h1>
          <h1><span className='text-orange-500'>E</span></h1>
          <h1><span className='text-pink-500'>R</span></h1>
          <h1><span className='text-red-500'>Y</span></h1>
        </div>
        </div>

        <div className='flex justify-center items-center me-7'>
          <ul className='flex gap-x-20 text-1xl font-bold '>
            <li><a className='inline-block  text-teal-500'>HOME</a></li>
            <li>ABOUT</li>
            <li>HOW IT WORKS</li>
            <li>SIGN UP / LOGIN</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
