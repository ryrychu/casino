import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-creative";
import {Autoplay, EffectCreative} from 'swiper';
import { PopularGamesSubCard1, PopularGamesSubCard2, PopularGamesSubCard3 } from '../assets/Web';
const PopularGamesCardSlider = () => {
  return (
    <div className='w-2/4 h-[450px]'>
    <Swiper
        loop={true}
        effect={"creative"}
        creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCreative]}
        className="popularGamesCard_swiper"
      >
        <SwiperSlide>
          <img src={PopularGamesSubCard1}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={PopularGamesSubCard2}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={PopularGamesSubCard3}/>
        </SwiperSlide>
        <div className="swiper-pagination"> </div>
      </Swiper>
    </div>
  )
}

export default PopularGamesCardSlider