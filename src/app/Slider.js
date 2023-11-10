// Import Swiper React components
'use client';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './css/globals.css';
import './css/Slider.css';

export default function Slider() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // 当页面加载和大小改变时触发
    handleResize();
    window.addEventListener('resize', handleResize);

    // cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className={isMobile ? '' : 'page01'}>
          <div className="title01">
            <h1 className={isMobile ? 'text-[32px]' : ''}>
              ourlyを導入してから
              <br />
              会社に関する悩みが全部解決できました！
            </h1>
            <p>
              ourlyは、社員のエンゲージメントを向上させる、
              <br />
              web社内報ツールです。
            </p>
          </div>
          <span className="triangle01"></span>
          <span className="triangle02"></span>
          <img
            src={isMobile ? '/img/phone-KV01.png' : '/img/office-bg.jpg'}
            className="KV"
          />
          <span className="download01">
            <img src="/img/QR_google.png" />
          </span>
          <span className="download02">
            <img src="/img/QR_apple.png" />
          </span>
        </SwiperSlide>
        <SwiperSlide className={isMobile ? '' : 'page02'}>
          <div className="title02">
            <h1 className={isMobile ? 'text-[32px]' : ''}>
              ourlyを導入してから
              <br />
              読みさすい社内報を
              <br />
              簡単に作れるようになりました！
            </h1>
            <p>
              ourlyは、社員のエンゲージメントを向上させる、
              <br />
              web社内報ツールです。
            </p>
          </div>
          <span className="triangle03"></span>
          <span className="triangle04"></span>
          <img
            src={isMobile ? '/img/phone-KV02.png' : '/img/30Ywoman-04-bg.jpg'}
          />
          <span className="download03">
            <img src="/img/QR_google.png" />
          </span>
          <span className="download04">
            <img src="/img/QR_apple.png" />
          </span>
        </SwiperSlide>
        <SwiperSlide className={isMobile ? '' : 'page03'}>
          <div className="title03">
            <h1 className={isMobile ? 'text-[32px]' : ''}>
              ourlyを導入してから
              <br />
              一体感が生まれました！
            </h1>
            <p>
              ourlyは、社員のエンゲージメントを向上させる、
              <br />
              web社内報ツールです。
            </p>
          </div>
          <span className="triangle05"></span>
          <span className="triangle06"></span>
          <img
            src={isMobile ? '/img/phone-KV03.png' : '/img/happypeople-bg.png'}
          />
          <span className="download05">
            <img src="/img/QR_google.png" />
          </span>
          <span className="download06">
            <img src="/img/QR_apple.png" />
          </span>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
