import React from "react";
import Marquee from "react-fast-marquee";
function About() {
  return (
    <>
     
      <div className="bg-[#FF768C] pt-3 pb-3 ">
        <Marquee>
          <h1 className="text-[#fff] font-modak text-4xl sm:text-6xl txt2 overflow-hidden ">First AI & ZK Based Escape Room Game . First AI & ZK Based Escape Room Game</h1>
        </Marquee>
      </div>
      <section className="pt-8 bg-[#b7e3ff]">
        <div className="container-wrapper">
          <div className="flex items-center">
            <div>
              <img src="images/where.png" alt="" />
            </div>
          </div>
          <p className="font-arch text-[#000] text-xl mt-0 sm:mt-[-6rem]">
            Lorem ipsum dolor sit amet consectetur. Nunc felis ut donec
            bibendum. Est nunc quam vitae lacus amet posuere id eu. Ac volutpat
            viverra quis eget a pellentesque adipiscing tristique. Tempus
            adipiscing habitant euismod egestas lec..Lorem ipsum dolor sit amet
            consectetur. Nunc felis ut donec bibendum. Est nunc quam vitae lacus
            amet posuere id eu. Ac volutpat viverra quis eget a pellentesque
            adipiscing tristique. Tempus adipiscing habitant euismod egestas
            lec.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
