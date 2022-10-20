import Banner1 from '../../../../assets/images/banner1.webp'
import Banner2 from '../../../../assets/images/banner2.webp'
import Banner3 from '../../../../assets/images/banner3.webp'
import Banner4 from '../../../../assets/images/banner4.webp'
import Banner5 from '../../../../assets/images/banner5.webp'
import Banner6 from '../../../../assets/images/banner6.webp'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { CorouselEl } from './corousel.styles'

export default function Corousel() {
  return (
    <CorouselEl>
      <Swiper
        slidesPerView={1}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Banner1} alt="" className='slide-img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} alt="" className='slide-img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner3} alt="" className='slide-img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner4} alt="" className='slide-img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner5} alt="" className='slide-img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner6} alt="" className='slide-img'/>
        </SwiperSlide>
      </Swiper>
    </CorouselEl>
  );
}