import React from 'react'
import { logoNavBar } from '../assets/Web'
import { NavBarIcon } from '../assets/Tablet'
const Navbar = () => {
  return (
    <nav className='w-full flex py-4 px-4 lg:px-20 justify-between items-center'>
      <img src={logoNavBar} alt="RoyalClubLogo"/>
      <div className='hidden lg:inline-flex bg-gradient-to-bl from-secondary to-tertiary rounded-md font-subFont hover:from-[#F6D083] hover:to-[#FFAF05]'>
        <a href="https://royalcircleclub.com/?referral=maJhannYt" className='xs:w-[97px] w-10 py-2 px-7 items-center'>
          <h1 className="text-sm text-primary font-semibold">Login</h1>
        </a>
        <a href="https://royalcircleclub.com/?referral=maJhannYt" className='w-[97px] p-0.5'>
          <div className="flex h-full w-full items-center justify-center bg-[#1A1A1A] back rounded-r">
            <h1 className="text-sm text-textMain font-medium">Register</h1>
          </div>
        </a>
      </div>

      <a href="https://royalcircleclub.com/?referral=maJhannYt" className='block lg:hidden'><img src={NavBarIcon}></img></a>
    </nav>
  )
}

export default Navbar