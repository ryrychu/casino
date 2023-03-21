import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

import {Autoplay, Pagination} from 'swiper';
import { Banner1,Banner2,Banner3,Banner4,Banner5 } from "../assets/Web";


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
          className="hero_swiper_container px-20"
        >
          <SwiperSlide>
            <img src={Banner1}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner2}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner3}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner4}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner5}/>
          </SwiperSlide>

          <div className="swiper-pagination"> </div>
        </Swiper>
      </div>
  )
}

export default HeroSlider