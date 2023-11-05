// Import Swiper React components
'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './css/globals.css';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/office-bg.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/30Ywoman-04-bg.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/happypeople.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
