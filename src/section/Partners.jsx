import React from "react";
import PartSlider from "../components/PartSlider";

function Partners() {
  return (
    <>
      <img src="images/part.png" alt="" className="w-full" />
      <section className="pt-16">
        <div className="container-wrapper">
          <div className="relative">
            <img src="images/part-img.png" alt="" className=" hidden sm:block"/>
            <img src="images/part-mob.png" alt="" className="block sm:hidden" />
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
        </div>
        <PartSlider/>
      </section>
    </>
  );
}

export default Partners;
