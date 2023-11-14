import React, { useState, useEffect } from 'react';
import styles from './style';
import { Navbar, Hero, HotGames, Footer, PopularGames, ChooseSide, GameProviders, VideoTutorial, CTA, MessengerChat, LiveCasino, Slots, Popup } from "./components";
import { BGCasino } from './assets/Web';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupTriggered, setPopupTriggered] = useState(false);

  const handleScroll = () => {
    const triggerPoint = 500; // Adjust as needed
    
    if (window.scrollY > triggerPoint && !popupTriggered) {
      setShowPopup(true);
      setPopupTriggered(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [popupTriggered]);

  return (
    <div className='bg-center bg-no-repeat bg-cover w-full overflow-hidden' style={{ backgroundImage: `url(${BGCasino})`}}>
      <div className={`${styles.paddingNavX} ${styles.flexCenter} bg-[#1A1A1A]`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {showPopup && <Popup />}

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
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default App;
