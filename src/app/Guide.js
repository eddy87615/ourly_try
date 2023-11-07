'use client';

import React from 'react';
import './css/globals.css';
import './css/Guide.css';
import { useEffect } from 'react';
import { useState } from 'react';

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

  return (
    <>
      <div className={`guide fixed ${isOpen ? 'guide-open' : ''}`}>
        <div className="header fixed top-0 left-0 z-10 p-8">
          <a href="https://service.ourly.jp/">
            <img src="/img/ourly_logo_w600.png" className="w-56" />
          </a>
        </div>
        <p className="text-[48px] font-bold guide-title">
          あなたは何を悩んでいるの？
        </p>
        <div className="guide-bubble">
          <div
            className={`guide01 shadow-2xl ${
              isGuideOpen.guide01 ? 'guide01-open' : ''
            }`}
            onClick={() => handleGuide(1)}
          >
            <p className="text-[20px] ">
              ずっとリモートだから会社に
              <br />
              何が起きたのか全然わからない...
            </p>
            <p className="text-[20px] text-right mt-5">
              会社との交流が少なくなった…
            </p>
          </div>
          <div
            className={`guide02 shadow-2xl ${
              isGuideOpen.guide02 ? 'guide02-open' : ''
            }`}
            onClick={() => handleGuide(2)}
          >
            <p className="text-[20px]">
              どうやって自分の声がちゃんと
              <br />
              届けるのか？
            </p>
            <p className="text-[20px] text-right mt-5">
              職場をさらによくしたいな…
            </p>
          </div>
          <div
            className={`guide03 shadow-2xl ${
              isGuideOpen.guide03 ? 'guide03-open' : ''
            }`}
            onClick={() => handleGuide(3)}
          >
            <p className="text-[20px]">社内報の制作と管理が難しい…</p>
            <p className="text-[20px] text-right mt-5">
              みんなは自分の作った内容に
              <br />
              興味あるかな…
            </p>
          </div>
        </div>
        <button
          className="open text-[18px]"
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
