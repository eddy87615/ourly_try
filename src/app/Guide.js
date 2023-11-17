'use client';

import React from 'react';
import './css/globals.css';
import './css/Guide.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Tilt } from 'react-tilt';

export default function Guide() {
  useEffect(() => {
    // 在组件加载后，设置一个短暂的延时来启动动画
    const animateElements = () => {
      const elements = document.querySelectorAll(
        '.guide-title, .guide01, .guide02, .guide03, .open'
      );
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, (index + 1) * 500); // 递增的延迟时间（500ms）
      });
    };

    animateElements();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const [isGuideOpen, setGuideOpen] = useState({
    guide01: false,
    guide02: false,
    guide03: false,
  });
  const handleGuide = (guideNum) => {
    setGuideOpen((prevGuideOpen) => ({
      ...prevGuideOpen,
      [`guide0${guideNum}`]: true,
    }));
    setIsOpen(true);
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  // const defaultOptions = {
  //   reverse: false, // reverse the tilt direction
  //   max: 35, // max tilt rotation (degrees)
  //   perspective: 500, // Transform perspective, the lower the more extreme the tilt gets.
  //   scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  //   speed: 2000, // Speed of the enter/exit transition
  //   transition: true, // Set a transition on enter/exit.
  //   axis: null, // What axis should be disabled. Can be X or Y.
  //   reset: true, // If the tilt effect has to be reset on exit.
  //   easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
  // };

  return (
    <>
      <div className={`guide fixed ${isOpen ? 'guide-open' : ''}`}>
        <div className="header fixed top-0 left-0 z-10 p-8">
          <img src="/img/ourly_logo.webp" className="w-56" />
        </div>
        <p className="text-[48px] font-bold guide-title">
          こんなお悩みありませんか？
        </p>
        <ul className="guide-bubble">
          <li
            className={`guide01 shadow-2xl ${
              isGuideOpen.guide01 ? 'guide01-open' : ''
            }`}
            onClick={() => handleGuide(1)}
          >
            <p className="text-[28px] font-bold flex justify-center mt-5 leading-[60px]">
              私はリモートワーカーです。
              <br />
              私は…
            </p>
            <img
              src="/img/20Yman-06-bgN.webp"
              className="absolute bottom-0 left-[50%] translate-x-[-50%] h-[80%]"
            />
            <div className="card-back ">
              <img
                src="/img/20Yman-02-bgN.webp"
                className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[60%]"
              />
            </div>
            {/* <p className="text-[20px] text-right mt-5">
              会社との交流が少なくなった…
            </p> */}
          </li>
          <li
            className={`guide02 shadow-2xl ${
              isGuideOpen.guide02 ? 'guide02-open' : ''
            }`}
            onClick={() => handleGuide(2)}
          >
            <p className="text-[28px] font-bold flex justify-center mt-5 leading-[60px]">
              私は会社の役員です。
              <br />
              私は…
            </p>
            <img
              src="/img/30Yman-07-bgN.webp"
              className="absolute bottom-0 left-[50%] translate-x-[-50%] h-[80%]"
            />
            <div className="card-back ">
              <img
                src="/img/30Yman-06.webp"
                className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[70%]"
              />
            </div>
            {/* <p className="text-[20px] text-right mt-5">
              職場をさらによくしたいな…
            </p> */}
          </li>
          <li
            className={`guide03 shadow-2xl ${
              isGuideOpen.guide03 ? 'guide03-open' : ''
            }`}
            onClick={() => handleGuide(3)}
          >
            <p className="text-[28px] font-bold flex justify-center mt-5 leading-[60px]">
              私は社内報編集者です。
              <br />
              私は…
            </p>
            <img
              src="/img/30Ywoman-05-bgN.webp"
              className="absolute bottom-0 left-[50%] translate-x-[-50%] h-[80%]"
            />
            <div className="card-back ">
              <img
                src="/img/30Ywoman-01-bgN-2.webp"
                className="absolute bottom-0 left-[50%] translate-x-[-50%] "
              />
            </div>
            {/* <p className="text-[20px] text-right mt-5">
              私は社内報編集者です。
              <br />
              私は…
            </p> */}
          </li>
        </ul>
        <button
          className="open text-[18px] font-bold"
          onClick={() => {
            handleOpen();
            handleTop();
          }}
        >
          最初からourlyを知る
        </button>
      </div>
    </>
  );
}
