import React, { useState } from 'react';
import { popupLogo, coin } from '../assets/Web';
import { popupItems } from '../constants';
import styles from '../style';

const PopupItem = ({ text, isLast }) => (
  <div className={`flex self-start items-center gap-2 ${isLast ? 'mb-4' : ''}`}>
    <img src={coin} className='w-7 h-7' />
    <p className='text-textMain font-subFont'>{text}</p>
  </div>
);

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-20'>
          <div className="popup-bg px-20 pb-14 pt-10 flex flex-col items-center relative popup-fade-in show">
            <button
              className='text-white rounded-full border-white border-2 w-7 h-7 absolute top-2 right-2'
              onClick={handleClose}
            >
              X
            </button>
            <img src={popupLogo} alt="Popup Logo" className='w-48 h-48 mb-2' />
            <h2 className='text-[#f208ff] font-bold font-headingFont text-2xl mb-3'>WE'RE LOOKING FOR PLAYERS</h2>
            {popupItems.map((item, index) => (
              <PopupItem key={index} text={item} isLast={index === popupItems.length - 1} />
            ))}
            <a  target="_blank" href="https://playfinooc.vip/r/Maxxwin/reg"><button className='text-textMain px-6 py-2 bg-purple-900 font-semibold text-2xl font-headingFont rounded-full leading-9 shadow-black shadow-md' onClick={handleClose}>
              REGISTER NOW
            </button></a>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
