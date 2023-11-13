import React from 'react'
import styles from './style';
import { Navbar, Hero, HotGames, Footer, PopularGames, ChooseSide, GameProviders, VideoTutorial, CTA, MessengerChat, LiveCasino, Slots} from "./components";
import { BGCasino } from './assets/Web';

const App = () => (
  <div className='bg-center bg-no-repeat bg-cover w-full overflow-hidden' style={{ backgroundImage: `url(${BGCasino})`}}>
  <div className={`${styles.paddingNavX} ${styles.flexCenter} bg-[#1A1A1A]`}>
    <div className={`${styles.boxWidth}`}>
      <Navbar />
    </div>
  </div>

  <div className={`${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <Hero />
    </div>
  </div>
  <div className={`bg-bgColor ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth} flex flex-col gap-y-4`}>
      <ChooseSide />
      <HotGames />
      <PopularGames/>
      <LiveCasino/>
      <Slots/>
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