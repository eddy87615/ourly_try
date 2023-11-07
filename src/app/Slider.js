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
            <h1>
              私はourlyで
              <br />
              より良い職場ができた！
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
          <a
            className="download01"
            href="https://play.google.com/store/apps/details?id=jp.ourly.media&hl=en_US"
            target="_blank"
          >
            <img src="/img/google-play-download-android-app-logo-png-transparent.png" />
          </a>
          <a
            className="download02"
            href="https://apps.apple.com/jp/app/ourly/id1589408338"
            target="_blank"
          >
            <img src="/img/app-store-icons-apple-app-store.png" />
          </a>
        </SwiperSlide>
        <SwiperSlide className={isMobile ? '' : 'page02'}>
          <div className="title02">
            <h1>
              私はourlyで
              <br />
              より良い社内報ができた！
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
          <a
            className="download03"
            href="https://play.google.com/store/apps/details?id=jp.ourly.media&hl=en_US"
            target="_blank"
          >
            <img src="/img/google-play-download-android-app-logo-png-transparent.png" />
          </a>
          <a
            className="download04"
            href="https://apps.apple.com/jp/app/ourly/id1589408338"
            target="_blank"
          >
            <img src="/img/app-store-icons-apple-app-store.png" />
          </a>
        </SwiperSlide>
        <SwiperSlide className={isMobile ? '' : 'page03'}>
          <div className="title03">
            <h1>
              私たちはourlyで
              <br />
              より良く繋いできた！
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
            src={isMobile ? '/img/phone-KV03.png' : '/img/happypeople.jpg'}
          />
          <a
            className="download05"
            href="https://play.google.com/store/apps/details?id=jp.ourly.media&hl=en_US"
            target="_blank"
          >
            <img src="/img/google-play-download-android-app-logo-png-transparent.png" />
          </a>
          <a
            className="download06"
            href="https://apps.apple.com/jp/app/ourly/id1589408338"
            target="_blank"
          >
            <img src="/img/app-store-icons-apple-app-store.png" />
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
