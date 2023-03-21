import React from 'react'
import styles from '../style'
import { GameProviderHovered1, GameProviderHovered2, GameProviderHovered3, GameProviderHovered4, GameProviderHovered5, GameProviderHovered6, GameProviderHovered7, GameProviderHovered8, GameProviderHovered9, GameProviderHovered10, GameProviderHovered11, GameProviderHovered12, GameProviderHovered13} from '../assets/Web'
const GameProviders = () => {
  return (
    <section className={`${styles.flexCenter} flex-col py-20 gap-8  px-32`}>
        <div className='flex flex-col w-fit gap-0'>
          <h2 className='font-headingFont text-textMain text-5xl leading-none'>PLAYER OR AGENT</h2>
          <div className='w-16 border-2 border-secondary rounded-lg'></div>
        </div>

        <div className='h-56 w-full flex flex-row gap-x-6 py-1 justify-center game-provider'>
          <img src={GameProviderHovered1}/>
          <img src={GameProviderHovered2}/>
          <img src={GameProviderHovered3}/>
          <img src={GameProviderHovered4}/>
          <img src={GameProviderHovered5}/>
          <img src={GameProviderHovered6}/>
          <img src={GameProviderHovered7}/>
          <img src={GameProviderHovered8}/>
          <img src={GameProviderHovered9}/>
          <img src={GameProviderHovered10}/>
          <img src={GameProviderHovered11}/>
          <img src={GameProviderHovered12}/>
          <img src={GameProviderHovered13}/>

        </div>
    </section>
  )
}

export default GameProviders