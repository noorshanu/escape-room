import React from "react";
import Marquee from "react-fast-marquee";
function About() {
  return (
    <>
      <div className="bg-[#FF768C] pt-3 pb-3 ">
        <Marquee>
          <h1 className="text-[#fff] font-modak text-4xl sm:text-6xl txt2 overflow-hidden ">
            First AI & ZK Based Escape Room Game . First AI & ZK Based Escape
            Room Game
          </h1>
        </Marquee>
      </div>
      <section className="pt-8 pb-10 bg-[#b7e3ff]">
        <div className="container-wrapper">
          <div className="flex items-center">
            <div>
              <img src="images/where.png" alt="" />
            </div>
          </div>
          <p className="font-arch text-[#000] text-xl mt-0 sm:mt-[-6rem]">
            Welcome to the world of Escape Room, an extraordinary project
            inspired by the captivating Squid Games. Immerse yourself in a realm
            of intrigue and challenge where your problem-solving skills will be
            put to the ultimate test. Engage in mind-bending puzzles, navigate
            through treacherous obstacles, and unravel hidden mysteries with the
            power of AI and cutting-edge Zero-Knowledge Proof (ZK) technology.
            Prepare for a personalized adventure tailored to your unique
            abilities, as you embark on a journey that pushes the boundaries of
            wit and survival. Get ready to experience the thrill of Escape Room
            and discover the captivating secrets that lie within.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
