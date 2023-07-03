import { useEffect, useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserve";
import Navbar from "../components/Navbar";

function Hero() {
  const videoRef = useRef();
  const isScrolled = useIntersectionObserver(videoRef, { threshold: 0.5 });

  useEffect(() => {
    if (videoRef?.current) {
      const isPlaying =
        videoRef.current.currentTime > 0 &&
        !videoRef.current.paused &&
        !videoRef.current.ended &&
        videoRef.current.readyState > videoRef.current.HAVE_CURRENT_DATA;

      if (isScrolled) {
        // videoRef.current.currentTime = 0;
        if (!isPlaying) {
          videoRef.current.play();
        }
      } else {
        if (isPlaying) {
          videoRef.current.pause();
        }
      }
    }
  }, [isScrolled]);
  return (
    <section className="h-[100%] relative sm:z-0 z-50">
      <div
        id="about_video"
        className="max-h-[122vh] w-auto"
        dangerouslySetInnerHTML={{
          __html: `
                <video
                id="about_video"
                class="max-h-[122vh] w-auto"
                autoplay
                muted
                loop
                  playsinline
                  preload="auto"
                >
              
                <source src="images/hero.mp4" type="video/mp4" />
                
                </video>`,
        }}
      />
      <div className="absolute bottom-[15%] left-0 right-0 flex justify-center gap-x-3">
        <a href="https://www.pinksale.finance/launchpad/0x47087e301148d6d52515F6999Dd4B613e26143A5?chain=ETH"
         target="_blank"
         rel="noreferrer"
         className={
            "hover:text-white market  transition-all duration-300 hover:bg-black bg-[#b027fb] hover:border hover:border-[#433838] text-[#fff] txt hover:border-b-4 rounded-full px-5 py-2 text-lg font-modak"
          }
        >
          Buy now
        </a>
        <a
        href={"https://escaperoometh.gitbook.io/docs/"}
        target='_blank'
        rel="noreferrer"
          className={
            "hover:text-white market txt transition-all duration-300 hover:bg-black bg-[#b027fb] hover:border hover:border-[#433838] text-[#fff] hover:border-b-4 rounded-full px-5 py-2 text-lg font-modak"
          }
        >
          Read more
        </a>
      </div>
    </section>
  );
}

export default Hero;
