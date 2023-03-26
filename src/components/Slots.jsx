import React from 'react'
import { Slots1, Slots2, Slots3, Slots4 } from '../assets/Tablet'

const Slots = () => {
    return (
        <section id="hot_games" className='flex flex-col pt-8 gap-2 lg:hidden'>
          <div className='flex flex-col w-fit gap-0'>
            <h2 className='font-headingFont text-textMain text-2xl lg:text-5xl leading-none'>SLOTS</h2>
            <div className='hidden lg:block w-16 border-2 border-secondary rounded-lg'></div>
          </div>
          <div className='grid grid-cols-2 grid-rows-2 place-items-stretch gap-4 newCards'>
            <a href="https://royalcircleclub.com/?referral=maJhannYt"><img src={Slots1}></img></a>
            <a href="https://royalcircleclub.com/?referral=maJhannYt"><img src={Slots2}></img></a>
            <a href="https://royalcircleclub.com/?referral=maJhannYt"><img src={Slots3}></img></a>
            <a href="https://royalcircleclub.com/?referral=maJhannYt"><img src={Slots4}></img></a>
          </div>
          
        </section>
      )
}

export default Slots