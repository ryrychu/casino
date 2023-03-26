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
        <h2 className='font-headingFont text-textMain text-2xl lg:text-5xl leading-none'>HOT GAMES</h2>
        <div className='hidden lg:block w-16 border-2 border-secondary rounded-lg'></div>
      </div>
      
      <div className='w-full hidden xs:block'>
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
          
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames1}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames2}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames3}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames4}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames5}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames6}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames7}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames8}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames9}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames10}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames11}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames12}/></a></SwiperSlide> 
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames13}/></a></SwiperSlide> 
        </Swiper>
        
      </div>

      <div className='w-full block xs:hidden'>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={3}
          loopedSlides={6}
          spaceBetween={10}
          modules={[Navigation, A11y]}
          className="hotGames_swiper"
        >
          
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames1}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames2}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames3}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames4}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames5}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames6}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames7}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames8}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames9}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames10}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames11}/></a></SwiperSlide>
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames12}/></a></SwiperSlide> 
          <SwiperSlide><a href="https://royalcc.vip/r/maJhannYt/reg"><img src={HotGames13}/></a></SwiperSlide> 
        </Swiper>
        
      </div>
    </section>
  )
}

export default HotGames