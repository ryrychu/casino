import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Navigation, A11y } from "swiper";
import { HotGames1,HotGames2,HotGames3,HotGames4,HotGames5,HotGames6,HotGames7,HotGames8,HotGames9,HotGames10,HotGames11,HotGames12,HotGames13} from "../assets/Web";

const HotGames = () => {
  const swiperRef = useRef();
  return (
    <section id="hot_games" className='flex flex-col gap-0'>
      <div className='flex flex-col w-fit gap-0'>
        <h2 className='font-headingFont text-textMain text-5xl leading-none'>HOT GAMES</h2>
        <div className='w-16 border-2 border-secondary rounded-lg'></div>
      </div>
      
      <div className='w-full'>
        <div className='flex flex-row justify-end pb-2 gap-x-2'> 
          <button className='w-6 h-6 bg-floatingCont rounded-lg text-textMain justify-center font-bold ' onClick={() => swiperRef.current.slidePrev()}>
            <FaChevronLeft className="m-auto"/>
          </button>
          <button className='w-6 h-6 bg-floatingCont rounded-lg text-textMain justify-center font-bold ' onClick={() => swiperRef.current.slideNext()}>
            <FaChevronRight className="m-auto"/>
          </button>
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={6}
          loopedSlides={6}
          spaceBetween={60}
          modules={[Navigation, A11y]}
          className="hotGames_swiper"
        >
          
          <SwiperSlide><img src={HotGames1}/></SwiperSlide>
          <SwiperSlide><img src={HotGames2}/></SwiperSlide>
          <SwiperSlide><img src={HotGames3}/></SwiperSlide>
          <SwiperSlide><img src={HotGames4}/></SwiperSlide>
          <SwiperSlide><img src={HotGames5}/></SwiperSlide>
          <SwiperSlide><img src={HotGames6}/></SwiperSlide>
          <SwiperSlide><img src={HotGames7}/></SwiperSlide>
          <SwiperSlide><img src={HotGames8}/></SwiperSlide>
          <SwiperSlide><img src={HotGames9}/></SwiperSlide>
          <SwiperSlide><img src={HotGames10}/></SwiperSlide> 
          <SwiperSlide><img src={HotGames11}/></SwiperSlide> 
          <SwiperSlide><img src={HotGames12}/></SwiperSlide> 
          <SwiperSlide><img src={HotGames13}/></SwiperSlide> 
        </Swiper>
        
      </div>
    </section>
  )
}

export default HotGames