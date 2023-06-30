import { useEffect, useRef } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserve'
import Navbar from '../components/Navbar'

function Hero() {
  const videoRef = useRef()
  const isScrolled = useIntersectionObserver(videoRef, { threshold: 0.5 })

  useEffect(() => {
    if (videoRef?.current) {
      const isPlaying =
        videoRef.current.currentTime > 0 &&
        !videoRef.current.paused &&
        !videoRef.current.ended &&
        videoRef.current.readyState > videoRef.current.HAVE_CURRENT_DATA

      if (isScrolled) {
        // videoRef.current.currentTime = 0;
        if (!isPlaying) {
          videoRef.current.play()
        }
      } else {
        if (isPlaying) {
          videoRef.current.pause()
        }
      }
    }
  }, [isScrolled])
  return (
    <section className="h-[100%] relative">
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
        <button
          className={
            'hover:text-white market  transition-all duration-300 hover:bg-black bg-white hover:border hover:border-[#433838] text-[#433838] hover:border-b-4 rounded-full px-5 py-2 text-lg font-modak'
          }
        >
          Buy now
        </button>
        <button
          className={
            'hover:text-white market  transition-all duration-300 hover:bg-black bg-white hover:border hover:border-[#433838] text-[#433838] hover:border-b-4 rounded-full px-5 py-2 text-lg font-modak'
          }
        >
          Read more
        </button>
      </div>
    </section>
  )
}

export default Hero
