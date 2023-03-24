import React from 'react';
import FooterTopLinks from './FooterTopLinks';
import FooterBottomLinks from './FooterBottomLinks';

const Footer = () => {
  return (
    <section className='h-96 w-full bg-black px-52 pt-6 text-sm font-headingFont'>
      <FooterTopLinks/>
      <FooterBottomLinks/>
      <div className='flex justify-center pt-10 h-full'>
        <h4 className='font-semibold bg-clip-text text-transparent bg-gradient-to-b from-secondary/70 to-tertiary/70 '>© 2022 ROYAL CIRCLE CLUB sport&casino all rights reserved for those aged 18+</h4>
      </div>
    </section>
  )
}

export default Footer