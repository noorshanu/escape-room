import React from "react";
import PartSlider from "../components/PartSlider";

function Partners() {
  return (
    <>
      <img src="images/part.png" alt="" className="w-full" />
      <section className="pt-16">
        <div className="container-wrapper">
          <div className="relative">
            <img src="images/part-img.png" alt="" />
            <div className="content-img mx-auto text-center">
              <div className="logo-grid">
                <img src="images/part/AmazonPay.png" alt="" />
                <img src="images/part/AmazonPay.png" alt="" />
                <img src="images/part/AmazonPay.png" alt="" />
                <img src="images/part/AmazonPay.png" alt="" />
                <img src="images/part/AmazonPay.png" alt="" />
               

                
                
              </div>
              <div className="logo-grid">
              <img src="images/part/AmazonPay.png" alt="" />
                <img src="images/part/AmazonPay.png" alt="" />
                <img src="images/part/AmazonPay.png" alt="" />
                <img src="images/part/AmazonPay.png" alt="" />
                <img src="images/part/AmazonPay.png" alt="" />
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
