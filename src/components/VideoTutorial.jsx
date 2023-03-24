import React, {useRef} from 'react';
import styles from '../style';
import { spartvid, play } from '../assets/Web';

const VideoTutorial = () => {

  const videoRef = useRef();
  const buttonRef = useRef(null);
  const bgRef = useRef(null);
  const handlePlay = () => {
    videoRef.current.play();
    buttonRef.current.style.display = 'none';
    bgRef.current.style.display = 'none';
  };

  const handlePause = () => {
    if(videoRef.current.paused && !videoRef.current.seeking) {
      bgRef.current.style.display = 'initial';
      buttonRef.current.style.display = 'initial';
    }
  };

  const handleVideoPlay = () => {
    bgRef.current.style.display = 'none';
    buttonRef.current.style.display = 'none';
  };
  return (
    <section className={`${styles.flexCenter} flex-col pt-16 pb-4 gap-8  px-52`}>
      <div className='relative'>
        <button className='absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' ref={buttonRef}>
          <img src={play} onClick={handlePlay}/>
        </button>
        <div className='relative overflow-hidden'>
        <div className='absolute linear-vid w-full h-full rounded-3xl' ref={bgRef}>
        </div>
        <video className='rounded-3xl'controls ref={videoRef} onPause={handlePause} onPlay={handleVideoPlay}>
          <source src={spartvid}/>
        </video>
          
        </div>
      </div>
    </section>
  )
}

export default VideoTutorial