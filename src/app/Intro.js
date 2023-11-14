import React from 'react';
import './css/globals.css';
import './css/Intro.css';

export default function Intro() {
  return (
    <div className="intro" id="section0">
      <p className="text-[40px] font-bold intro-text">
        <span className=" span span01 text-[32px] font-semibold">
          会社の雰囲気を改善したい…
        </span>
        <span className=" span span02 text-[32px] font-semibold">
          コミュニケーションを常にとって欲しい…
        </span>
        あなたも会社のこと悩んでいますか？
        <span className=" span span03 text-[32px] font-semibold">
          皆んなの悩みを解決したい…
        </span>
        <span className=" span span04 text-[32px] font-semibold">
          会社をもっといい職場をさせたい…
        </span>
      </p>
    </div>
  );
}
