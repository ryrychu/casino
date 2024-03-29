import React from 'react'
import { logoNavBar } from '../assets/Web'
const Navbar = () => {
  return (
    <nav className='w-full flex py-4 px-4 lg:px-20 justify-between items-center'>
      <img src={logoNavBar} alt="RoyalClubLogo" className='lg:w-auto md:w-32 sm:w-28 w-[104px]'/>
      <div className='inline-flex bg-gradient-to-bl from-secondary to-tertiary rounded-md font-subFont hover:from-[#FA4EAF] hover:to-[#fc65ed]'>
        <a href="https://playfinooc.vip/r/Maxxwin/reg" className='md:w-[97px] w-10 py-2 px-4 md:px-7 items-center'>
          <h1 className="text-[12px] md:text-sm text-primary font-semibold">Login</h1>
        </a>
        <a href="https://playfinooc.vip/r/Maxxwin/reg" className='w-[97px] p-0.5 pl-5 md:p-0.5 ' >
          <div className="flex h-full w-full items-center justify-center bg-[#1A1A1A] back rounded-r">
            <h1 className="text-[12px] md:text-sm text-textMain font-medium">Register</h1>
          </div>
        </a>
      </div>

     
    </nav>
  )
}

export default Navbar