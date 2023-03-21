import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade'
import {Autoplay, EffectFade} from 'swiper';
import { PopularGamesHeaderCard1/* , PopularGamesHeaderCard2, PopularGamesHeaderCard3, PopularGamesHeaderCard4, PopularGamesHeaderCard5, PopularGamesHeaderCard6  */} from '../assets/Web';

const PopularCardSliders = () => {
  return (
    <div className='w-full h-[450px]'>
    <Swiper
        loop={true}
        effect={"fade"}
        spaceBetween={100}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="popularGames_swiper"
      >
        <SwiperSlide>
          <img src={PopularGamesHeaderCard1}/>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={PopularGamesHeaderCard2}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={PopularGamesHeaderCard3}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={PopularGamesHeaderCard4}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={PopularGamesHeaderCard5}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={PopularGamesHeaderCard6}/>
        </SwiperSlide> */}
        

        <div className="swiper-pagination"> </div>
      </Swiper>
    </div>
  )
}

export default PopularCardSliders