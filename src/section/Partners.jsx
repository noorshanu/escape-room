import React from "react";
import PartSlider from "../components/PartSlider";

function Partners() {
  return (
    <>
      <img src="images/part.png" alt="" className="w-full" />
      <section className="pt-16">
        <img src="images/logosBox.svg" alt="" className="w-full h-auto max-w-7xl px-5 mx-auto"/>
        <PartSlider/>
      </section>
    </>
  );
}

export default Partners;
