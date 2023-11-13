import React, { useRef, useState } from "react";
import { HeroSlider } from "../Sliders";
import { heroFeatures } from "../constants";


const Hero = () => {
  return (
    <section id="hero" className="flex flex-col gap-y-16 pt-6">
      <HeroSlider/>
      <div className="hidden px-48 lg:block">
        <a href="https://playfinooc.vip/r/Maxxwin/reg"><div className="w-full bg-floatingCont flex flex-row justify-between px-[89px] rounded-[20px] group hover:shadow-lg hover:shadow-secondary/70 hover:ring-1 hover:ring-secondary hover:transition duration-500 ease=in-out">
          {heroFeatures.map((heroFeature) => (
            <div key={heroFeature.id} className="flex font-headingFont text-secondary/70 gap-x-6">
              <h3 className="text-[88px] group-hover:text-secondary">{heroFeature.number}</h3>
              <div className="flex flex-col my-1 justify-center">
                <h4 className="text-2xl group-hover:text-secondary">{heroFeature.title}</h4>
                <p className="text-[12px] font-subFont text-textMain italic">{heroFeature.content}</p>
              </div>
            </div>
          ))}
        </div></a>
      </div>
    </section>
  )
}

export default Hero