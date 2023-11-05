'use client';

import React from 'react';
import './css/globals.css';
import './css/Guide.css';
import { useEffect } from 'react';

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
  return (
    <>
      <div className="guide">
        <div className="header fixed top-0 left-0 z-10 p-8">
          <img src="/img/ourly_logo_w600.png" className="w-56" />
        </div>
        <p className="text-[48px] guide-title">あなたは何を悩んでいるの？</p>
        <div className="guide-bubble">
          <div className="guide01 shadow-2xl">
            <p className="text-[20px]">
              ずっとリモートだから会社に
              <br />
              何が起きたのか全然わからない...
            </p>
            <p className="text-[20px] text-right mt-5">
              会社との交流が少なくなった…
            </p>
          </div>
          <div className="guide02 shadow-2xl">
            <p className="text-[20px]">
              どうやって自分の声がちゃんと
              <br />
              届けるのか？
            </p>
            <p className="text-[20px] text-right mt-5">
              職場をさらによくしたいな…
            </p>
          </div>
          <div className="guide03 shadow-2xl">
            <p className="text-[20px]">社内報の制作と管理が難しい…</p>
            <p className="text-[20px] text-right mt-5">
              みんなは自分の作った内容に
              <br />
              興味あるかな…
            </p>
          </div>
        </div>
        <button className="open text-[18px]">最初からourlyを知る</button>
      </div>
    </>
  );
}
