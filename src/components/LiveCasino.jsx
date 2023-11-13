import React from 'react'

import { LiveCasino1, LiveCasino2, LiveCasino3, LiveCasino4 } from '../assets/Tablet'
const LiveCasino = () => {
  return (
    <section id="hot_games" className='flex flex-col pt-8 gap-2 lg:hidden'>
      <div className='flex flex-col w-fit gap-0'>
        <h2 className='font-headingFont text-textMain text-2xl lg:text-5xl leading-none'>LIVE CASINO</h2>
        <div className='hidden lg:block w-16 border-2 border-secondary rounded-lg'></div>
      </div>
      <div className='grid grid-cols-2 grid-rows-2 place-items-stretch gap-4 newCards'>
        <a href="https://playfinooc.vip/r/Maxxwin/reg"><img src={LiveCasino1}></img></a>
        <a href="https://playfinooc.vip/r/Maxxwin/reg"><img src={LiveCasino2}></img></a>
        <a href="https://playfinooc.vip/r/Maxxwin/reg"><img src={LiveCasino3}></img></a>
        <a href="https://playfinooc.vip/r/Maxxwin/reg"><img src={LiveCasino4}></img></a>
      </div>
      
    </section>
  )
}

export default LiveCasino