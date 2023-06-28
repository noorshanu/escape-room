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
            <div className="content">
              <div className="logo-grid"></div>
            </div>
          </div>
        </div>
        <PartSlider/>
      </section>
    </>
  );
}

export default Partners;
