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
        <div className="container-wrapper">
          <div className="relative">
            <img src="images/part-img.png" alt="" className=" hidden sm:block"/>
           
            <div className="content-img mx-auto text-center">
              <div className="logo-grid">
                <img src="images/part/AmazonPay.png" alt="" />
                <img src="images/part/img2.png" alt="" />
                <img src="images/part/img3.png" alt="" />
                <img src="images/part/img4.png" alt="" />
                <img src="images/part/img5.png" alt="" />
               

                
                
              </div>
              <div className="logo-grid">
              <img src="images/part/img6.png" alt="" />
                <img src="images/part/img7.png" alt="" />
                <img src="images/part/img8.png" alt="" />
                <img src="images/part/img9.png" alt="" />
                <img src="images/part/GooglePay.png" alt="" />
              </div>
            </div>
          </div>
          <MobLogo/>
        </div>
      
      </section>
    </>
  );
}

export default Partners;
