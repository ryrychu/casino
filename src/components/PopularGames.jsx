import React from 'react'
import { PopularCardSliders, PopularGamesCardSlider } from '../Sliders'
import { PopularGamesSlots1, PopularGamesSlots2, PopularGamesSlots3, PopularGamesSlots4, BasketIdle} from '../assets/Web'

const PopularGames = () => {
  return (
    <section id="popular_games" className='flex flex-col gap-y-8'>
      <div className='flex flex-col w-fit gap-0'>
        <h2 className='font-headingFont text-textMain text-5xl leading-none'>POPULAR GAMES</h2>
        <div className='w-16 border-2 border-secondary rounded-lg'></div>
      </div>

      <PopularCardSliders/>

      <div className='w-full h-64 bg-floatingCont rounded-2xl flex flex-row slots-image justify-around px-20 items-center'>
        <img src={PopularGamesSlots1}/>
        <img src={PopularGamesSlots2}/>
        <img src={PopularGamesSlots3}/>
        <img src={PopularGamesSlots4}/>
      </div>

      <div className='flex flex-row w-full gap-x-8'>
        <div className='w-2/4 h-[450px] flex justify-center '> 
          <img src={BasketIdle} className='hover:brightness-150 transition-all duration-300'>
          </img>
        </div>
        <PopularGamesCardSlider/>
      </div>
      <div>
        
      </div>
    </section>
  )
}

export default PopularGames