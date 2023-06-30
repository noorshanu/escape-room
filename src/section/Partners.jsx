import React from "react";
import PartSlider from "../components/PartSlider";
import Marquee from "react-fast-marquee";
import MobLogo from "../components/MobLogo";

function Partners() {
  return (
    <>
       <div className="bg-[#FF768C] pt-3 pb-3  relative z-10">
        <Marquee>
          <h1 className="text-[#fff] font-modak text-4xl sm:text-6xl txt2 overflow-hidden ">Partners · Partners · Partners · Partners · Partners · Partners · Partners · Partners · </h1>
        </Marquee>
      </div>
      <section className="pt-16">
      <PartSlider/>
       
       
       
      <div className="bg-[#AFE0FF] pt-3 pb-3 mt-8 ">
        <Marquee>
          <h1 className="text-[#fff] font-modak text-4xl sm:text-6xl txt2 overflow-hidden ">
          Featured. Featured. Featured. Featured. Featured. Featured.
          </h1>
        </Marquee>
      </div>
       
        <div className="container-wrapper mt-8">
      
          <MobLogo/>
        </div>
      
      </section>
    </>
  );
}

export default Partners;
