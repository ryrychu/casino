import React from 'react';
import FooterTopLinks from './FooterTopLinks';
import FooterBottomLinks from './FooterBottomLinks';
import FooterTabTop from './FooterTabTop';
import FooterTabBot from './FooterTabBot';
import FooterTabBotImage from './FooterTabBotImage';
const Footer = () => {
  return (
    <section className='h-96 w-full bg-black px-0 xs:px-16 lg:px-64 pt-6 text-[12px] xs:text-sm lg:text-sm font-headingFont'>
      <FooterTopLinks/>
      <FooterTabTop/>
      <FooterBottomLinks/>
      <FooterTabBot/>
      <FooterTabBotImage/>
      <div className='flex justify-center pt-10 h-full'>
        <h4 className='font-semibold bg-clip-text text-transparent bg-gradient-to-b from-secondary/70 to-tertiary/70 '>© 2022 ROYAL CIRCLE CLUB sport&casino all rights reserved for those aged 18+</h4>
      </div>
    </section>
  )
}

export default Footer