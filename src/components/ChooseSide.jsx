import React from 'react'
import styles from '../style'
import { AgentHovered, AgentIdle, PlayerHovered, PlayerIdle } from '../assets/Web'
import { AgentTab, PlayerTab } from '../assets/Tablet'
const ChooseSide = () => {
  return (
    <section className='flex lg:justify-center items-stretch lg:items-center flex-col py-8 lg:py-20 gap-2 xs:gap-8 lg:px-32'>
        <div className='flex flex-col w-fit gap-0 self-start lg:self-center'>
          <h2 className='font-headingFont text-textMain text-xl xs:text-2xl lg:text-5xl leading-none'>PLAYER OR AGENT</h2>
          <div className='hidden lg:block w-16 border-2 border-secondary rounded-lg'></div>
        </div>

        <div className='hidden h-56 w-full lg:grid grid-cols-2 gap-x-6 py-1'>
          <div className='group w-full bg-gradient-to-b from-choiceGrad1 to-choiceGrad2 flex items-center justify-evenly gap-x-10 py-4 pr-20  rounded-3xl chooseSides hover:to-choiceGrad3'>
            <div className='relative h-40 w-44 chooseSide overflow-hidden'>
              <img src={AgentIdle} className='absolute inset-0 w-full h-full object-cover'/>
              <div className="gradient-overlay rounded-[10px] absolute inset-0 bg-gradient-to-b from-[#00000000] to-[#000000B2] hover:transition duration-500 ease=in-out"></div>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-6'>
              <h6 className='text-2xl font-headingFont text-white'>REGISTER AS <span className='group-hover:text-secondary transition-colors duration-300'>AGENT</span></h6>
              <a href="https://royalcircleclub.com/?referral=maJhannYt"><button className='border-2 border-secondary/75 rounded-3xl px-10 py-2.5 text-textMain/75 text-sm font-subFont hover:border-secondary hover:text-textMain transition-all duration-300'>Register</button></a>
            </div>
          </div>
          <div className='group w-full bg-gradient-to-b from-choiceGrad1 to-choiceGrad2 flex items-center justify-evenly gap-x-10 py-4 pr-20 rounded-3xl chooseSides hover:to-choiceGrad3'>
            <div className='relative h-40 w-44 chooseSide overflow-hidden'>
              <img src={PlayerIdle} className='absolute inset-0 w-full h-full object-cover'/>
              <div className="gradient-overlay rounded-[10px] absolute inset-0 bg-gradient-to-b from-[#00000000] to-[#000000B2] hover:transition duration-500 ease=in-out"></div>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-6'>
              <h6 className='text-2xl font-headingFont text-white'>REGISTER AS  <span className='group-hover:text-secondary transition-colors duration-300'>PLAYER</span></h6>
              <a href="https://royalcircleclub.com/?referral=maJhannYt"><button className='border-2 border-secondary/75 rounded-3xl px-10 py-2.5 text-textMain/75 text-sm font-subFont hover:border-secondary hover:text-textMain transition-all duration-300'>Register</button></a>
            </div>
          </div>
        </div>
        <div className='lg:hidden flex flex-row gap-4 justify-evenly'>
          <div><img src={AgentTab}></img></div>
          <div><img src={PlayerTab}></img></div>
        </div>
    </section>
  )
}

export default ChooseSide