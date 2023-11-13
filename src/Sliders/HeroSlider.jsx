import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

import {Autoplay, Pagination} from 'swiper';
import { Banner1,Banner2,Banner3,Banner4} from "../assets/Web";


const HeroSlider = () => {
  return (
    <div className="w-full">
        <Swiper
          loop={true}
          spaceBetween={100}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="hero_swiper_container px-0 xs:px-16 lg:px-20"
        >
          <SwiperSlide>
            <a href="https://playfinooc.vip/r/Maxxwin/reg"><img src={Banner1}/></a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://playfinooc.vip/r/Maxxwin/reg"><img src={Banner2}/></a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://playfinooc.vip/r/Maxxwin/reg"><img src={Banner3}/></a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://playfinooc.vip/r/Maxxwin/reg"><img src={Banner4}/></a>
          </SwiperSlide>

          <div className="swiper-pagination"> </div>
        </Swiper>
      </div>
  )
}

export default HeroSlider