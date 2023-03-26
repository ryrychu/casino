import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade'
import {Autoplay, EffectFade} from 'swiper';
import { PopularGamesHeaderCard1 , PopularGamesHeaderCard2, PopularGamesHeaderCard3, PopularGamesHeaderCard4, PopularGamesHeaderCard5, testcard} from '../assets/Web';

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
        <a href="https://royalcc.vip/r/maJhannYt/reg"><img src={PopularGamesHeaderCard1}/></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://royalcc.vip/r/maJhannYt/reg"><img src={PopularGamesHeaderCard2}/></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://royalcc.vip/r/maJhannYt/reg"><img src={PopularGamesHeaderCard3}/></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://royalcc.vip/r/maJhannYt/reg"><img src={PopularGamesHeaderCard4}/></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://royalcc.vip/r/maJhannYt/reg"><img src={PopularGamesHeaderCard5}/></a>
        </SwiperSlide>
        

        <div className="swiper-pagination"> </div>
      </Swiper>
    </div>
  )
}

export default PopularCardSliders