import React from 'react'
import styles from './style';


import { Navbar, Hero, GamesOffer, Footer, FAQ, Deposit, CTA, ChooseSide, Button  } from "./components";

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
    <div className={`${styles.boxWidth} flex flex-col gap-y-44`}>
      <ChooseSide />
      <GamesOffer />
      <CTA />
      <Deposit />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  </div>
</div>
);


export default App