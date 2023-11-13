import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-creative";
import {Autoplay, EffectCreative} from 'swiper';

import { PopularGamesHeaderCard1 , PopularGamesHeaderCard2, PopularGamesHeaderCard3, PopularGamesHeaderCard4, PopularGamesHeaderCard5} from '../assets/Web';
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
          <a href="https://playfinooc.vip/r/Maxxwin/reg"><img src={PopularGamesHeaderCard1}/></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://playfinooc.vip/r/Maxxwin/reg"><img src={PopularGamesHeaderCard2}/></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://playfinooc.vip/r/Maxxwin/reg"><img src={PopularGamesHeaderCard3}/></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://playfinooc.vip/r/Maxxwin/reg"><img src={PopularGamesHeaderCard4}/></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://playfinooc.vip/r/Maxxwin/reg"><img src={PopularGamesHeaderCard5}/></a>
        </SwiperSlide>
        <div className="swiper-pagination"> </div>
      </Swiper>
    </div>
  )
}

export default PopularGamesCardSlider