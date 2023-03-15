import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { heroFeatures } from "../constants";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

import {Autoplay, Pagination} from 'swiper';

const sliderImages = [
  "https://unsplash.it/1280/760?image=40",
  "https://unsplash.it/1280/760?image=41",
  "https://unsplash.it/1280/760?image=42",
  "https://unsplash.it/1280/760?image=43",
];

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col gap-y-16">
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
          className="swiper_container px-20"
        >
          <SwiperSlide>
            <img src={sliderImages[0]}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImages[1]}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImages[2]}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImages[3]}/>
          </SwiperSlide>

          <div className="swiper-pagination"> </div>
        </Swiper>
      </div>
      <div className="px-48">
        <div className="w-full bg-heroCont flex flex-row justify-between px-[89px] rounded-[20px] group hover:shadow-lg hover:shadow-secondary/70 hover:ring-1 hover:ring-secondary hover:transition duration-500 ease=in-out">
          {heroFeatures.map((heroFeature) => (
            <div key={heroFeature.id} className="flex font-headingFont text-secondary/70 gap-x-6">
              <h3 className="text-[88px] group-hover:text-secondary">{heroFeature.number}</h3>
              <div className="flex flex-col my-1 justify-center">
                <h4 className="text-2xl group-hover:text-secondary">{heroFeature.title}</h4>
                <p className="text-[12px] font-subFont text-textMain italic">{heroFeature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero