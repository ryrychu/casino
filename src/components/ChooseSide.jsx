import React from 'react'
import styles from '../style'
import { AgentHovered, AgentIdle, PlayerHovered, PlayerIdle } from '../assets/Web'

const ChooseSide = () => {
  return (
    <section className={`${styles.flexCenter} flex-col py-20 gap-8  px-32`}>
        <div className='flex flex-col w-fit gap-0'>
          <h2 className='font-headingFont text-textMain text-5xl leading-none'>PLAYER OR AGENT</h2>
          <div className='w-16 border-2 border-secondary rounded-lg'></div>
        </div>

        <div className='h-56 w-full grid grid-cols-2 gap-x-6 py-1'>
          <div className='group w-full bg-gradient-to-b from-choiceGrad1 to-choiceGrad2 flex items-center justify-evenly gap-x-10 py-4 pr-20  rounded-3xl chooseSides hover:to-choiceGrad3'>
            <div className='relative h-40 w-44 chooseSide overflow-hidden'>
              <img src={AgentIdle} className='absolute inset-0 w-full h-full object-cover'/>
              <div className="gradient-overlay rounded-[10px] absolute inset-0 bg-gradient-to-b from-[#00000000] to-[#000000B2] hover:transition duration-500 ease=in-out"></div>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-6'>
              <h6 className='text-2xl font-headingFont text-white'>REGISTER AS <span className='group-hover:text-secondary transition-colors duration-300'>AGENT</span></h6>
              <button className='border-2 border-secondary/75 rounded-3xl px-10 py-2.5 text-textMain/75 text-sm font-subFont hover:border-secondary hover:text-textMain transition-all duration-300'>Register</button>
            </div>
          </div>
          <div className='group w-full bg-gradient-to-b from-choiceGrad1 to-choiceGrad2 flex items-center justify-evenly gap-x-10 py-4 pr-20 rounded-3xl chooseSides hover:to-choiceGrad3'>
            <div className='relative h-40 w-44 chooseSide overflow-hidden'>
              <img src={PlayerIdle} className='absolute inset-0 w-full h-full object-cover'/>
              <div className="gradient-overlay rounded-[10px] absolute inset-0 bg-gradient-to-b from-[#00000000] to-[#000000B2] hover:transition duration-500 ease=in-out"></div>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-6'>
              <h6 className='text-2xl font-headingFont text-white'>REGISTER AS  <span className='group-hover:text-secondary transition-colors duration-300'>PLAYER</span></h6>
              <button className='border-2 border-secondary/75 rounded-3xl px-10 py-2.5 text-textMain/75 text-sm font-subFont hover:border-secondary hover:text-textMain transition-all duration-300'>Register</button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default ChooseSide