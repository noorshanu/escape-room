import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";

function PartSlider() {
  return (
    <>
    <div className="w-full pt-8 pb-8">
    <Swiper
      slidesPerView={5}
      spaceBetween={20}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="mySwiper"
    >
      <SwiperSlide>
        <div>
          <img src="images/part2/img1.png" alt="" className="h-[165px]" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="images/part2/img2.png" alt="" className="h-[165px]" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="images/part2/img3.png" alt="" className="h-[165px]" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="images/part2/img4.png" alt="" className="h-[165px]" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="images/part2/img1.png" alt="" className="h-[165px]" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="images/part2/img2.png" alt="" className="h-[165px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div>
          <img src="images/part2/img3.png" alt="" className="h-[165px]" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="images/part2/img4.png" alt="" className="h-[165px]" />
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
    </>
    
  );
}

export default PartSlider;
