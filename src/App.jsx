import React from 'react'
import styles from './style';
import { Navbar, Hero, HotGames, Footer, PopularGames, ChooseSide, GameProviders, VideoTutorial, CTA, MessengerChat} from "./components";

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
  <div className={`${styles.paddingNavX} ${styles.flexCenter} bg-[#1A1A1A]`}>
    <div className={`${styles.boxWidth}`}>
      <Navbar />
    </div>
  </div>

  <div className={`bg-primary ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <Hero />
    </div>
  </div>
  <div className={`bg-bgColor ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth} flex flex-col gap-y-4`}>
      <ChooseSide />
      <HotGames />
      <PopularGames/>
      <GameProviders/>
      <VideoTutorial/>
      <CTA/>
      <MessengerChat />
    </div>
  </div>
  
  <Footer />
</div>
);


export default App