import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import {EffectCoverflow} from 'swiper'
import {EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import img_1 from '../assets/images/img_1.png';
import img_2 from '../assets/images/img_2.png';
import img_3 from '../assets/images/img_3.png';
import img_4 from '../assets/images/img_4.png';
import img_5 from '../assets/images/img_5.png';
import img_6 from '../assets/images/img_6.png';
import img_7 from '../assets/images/img_7.png';

function Carousel() {
  return (
    <div className="container">
      {/* <h1 className="heading">Food Gallery</h1> */}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={img_1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_2} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_3} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_4} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_5} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_6} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_7} alt="img" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;