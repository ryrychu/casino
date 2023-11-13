import React from 'react'
import { PopularCardSliders, PopularGamesCardSlider } from '../Sliders'
import { PopularGamesSlots1, PopularGamesSlots2, PopularGamesSlots3, PopularGamesSlots4, BasketIdle} from '../assets/Web'

const PopularGames = () => {
  return (
    <section id="popular_games" className='hidden gap-y-8 lg:flex lg:flex-col'>
      <div className='flex flex-col w-fit gap-0'>
        <h2 className='font-headingFont text-textMain text-5xl leading-none'>POPULAR GAMES</h2>
        <div className='w-16 border-2 border-secondary rounded-lg'></div>
      </div>

      <PopularCardSliders/>

      <div className='w-full h-64 bg-floatingCont rounded-2xl flex flex-row slots-image justify-around px-20 items-center'>
        <a href="https://playfinooc.vip/r/Maxxwin/reg"><img src={PopularGamesSlots1}/></a>
        <a href="https://playfinooc.vip/r/Maxxwin/reg"><img src={PopularGamesSlots2}/></a>
        <a href="https://playfinooc.vip/r/Maxxwin/reg"><img src={PopularGamesSlots3}/></a>
        <a href="https://playfinooc.vip/r/Maxxwin/reg"><img src={PopularGamesSlots4}/></a>
      </div>

      <div className='flex flex-row w-full gap-x-8'>
        <div className='w-2/4 h-[450px] flex justify-center newCards'> 
        <a href="https://playfinooc.vip/r/Maxxwin/reg"><img src={BasketIdle} className='hover:brightness-150 transition-all duration-300'>
          </img></a>
        </div>
        <PopularGamesCardSlider/>
      </div>
      <div>
        
      </div>
    </section>
  )
}

export default PopularGames