import {useEffect, useRef} from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserve";


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
    <section className="h-[100vh]">
    <div
        id="about_video"
        className=""
        dangerouslySetInnerHTML={{
          __html: `
                <video
                id="about_video"
                
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
    </section>
  )
}

export default Hero