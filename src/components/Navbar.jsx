import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex py-4 px-20 justify-between items-center'>
      <img src="https://placehold.jp/124x40.png" alt="RoyalClubLogo"/>
      <div className='inline-flex bg-gradient-to-bl from-secondary to-tertiary rounded-md font-subFont'>
        <a className='w-[97px] py-2 px-7 items-center'>
          <h1 className="text-sm text-primary font-semibold">Login</h1>
        </a>
        <a href="" className='w-[97px] p-0.5'>
          <div className="flex h-full w-full items-center justify-center bg-[#1A1A1A] back rounded-r">
            <h1 className="text-sm text-textMain font-medium">Register</h1>
          </div>
        </a>
      </div>
    </nav>
  )
}

export default Navbar