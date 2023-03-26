import React from 'react'
import styles from '../style'
import { GameProviderHovered1, GameProviderHovered2, GameProviderHovered3, GameProviderHovered4, GameProviderHovered5, GameProviderHovered6, GameProviderHovered7, GameProviderHovered8, GameProviderHovered9, GameProviderHovered10, GameProviderHovered11, GameProviderHovered12, GameProviderHovered13} from '../assets/Web'
const GameProviders = () => {
  return (
    <section className={`${styles.flexCenter} flex-col pt-6 lg:pt-20 gap-2 xs:gap-8 lg:px-52`}>
        <div className='flex flex-col w-fit gap-0 self-start lg:self-center'>
          <h2 className='font-headingFont text-textMain text-2xl lg:text-5xl leading-none'>GAME PROVIDERS</h2>
          <div className='hidden lg:block w-16 border-2 border-secondary rounded-lg'></div>
        </div>

        <div className='w-full flex flex-row gap-x-1 xs:gap-x-6 px-0 py-1 justify-between game-provider'>
          <a href='https://royalcircleclub.com/?referral=maJhannYt'><img src={GameProviderHovered1}/></a>
          <a href='https://royalcircleclub.com/?referral=maJhannYt'><img src={GameProviderHovered2}/></a>
          <a href='https://royalcircleclub.com/?referral=maJhannYt'><img src={GameProviderHovered3}/></a>
          <a href='https://royalcircleclub.com/?referral=maJhannYt'><img src={GameProviderHovered4}/></a>
          <a href='https://royalcircleclub.com/?referral=maJhannYt'><img src={GameProviderHovered5}/></a>
          <a href='https://royalcircleclub.com/?referral=maJhannYt'><img src={GameProviderHovered6}/></a>
          <a href='https://royalcircleclub.com/?referral=maJhannYt'><img src={GameProviderHovered7}/></a>
          <a href='https://royalcircleclub.com/?referral=maJhannYt'><img src={GameProviderHovered8}/></a>
          <a href='https://royalcircleclub.com/?referral=maJhannYt'><img src={GameProviderHovered9}/></a>
          <a href='https://royalcircleclub.com/?referral=maJhannYt'><img src={GameProviderHovered10}/></a>
          <a href='https://royalcircleclub.com/?referral=maJhannYt'><img src={GameProviderHovered11}/></a>
          <a href='https://royalcircleclub.com/?referral=maJhannYt'><img src={GameProviderHovered12}/></a>
          <a href='https://royalcircleclub.com/?referral=maJhannYt'><img src={GameProviderHovered13}/></a>

        </div>
    </section>
  )
}

export default GameProviders