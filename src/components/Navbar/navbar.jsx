
import React from 'react'


export default function Navbar() {
 
  return (
    <nav className='shadow-sm flex flex-wrap items-center  w-full cursor-pointer'>
      <div className='container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto'>
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
        <button  data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        </button>
      
        <div className='justify-center items-center me-9 hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='flex gap-x-20 text-lg md:text-xl font-bold'>
            <li><a href='#' className='block py-2   text-teal-500'>HOME</a></li>
            <li><a href='#' className='block py-2'>ABOUT</a></li>
            <li><a href='#' className='block py-2  '>HOW IT WORKS</a></li>
            <li><a href='#' className='block py-2  '>SIGN UP / LOGIN</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
