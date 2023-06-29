import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";

function MobLogo() {
  return (
    <div className="bg-[#e0dccb] rounded-xl pt-8 pb-8 px-7 block sm:hidden ">
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
      breakpoints= {{
        340: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 5
        },
        1560: {
          slidesPerView: 5
        }
      }
      }
      className="mySwiper"
    >
      <SwiperSlide>
        <div>
        <img src="images/part/AmazonPay.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <img src="images/part/img2.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <img src="images/part/img3.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <img src="images/part/img4.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <img src="images/part/img5.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <img src="images/part/img6.png" alt="" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div>
        <img src="images/part/img7.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <img src="images/part/img8.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <img src="images/part/img9.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
        <img src="images/part/GooglePay.png" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
   
    </div>
  )
}

export default MobLogo


            
                
               
    

             
          
             
               