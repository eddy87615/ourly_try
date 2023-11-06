import React from 'react';
import './css/globals.css';
import './css/Header.css';

export default function Header() {
  return (
    <div className="header fixed top-0 left-0 z-10 p-8">
      <a href="https://service.ourly.jp/">
        <img src="/img/ourly_logo_w600.png" className="w-56" />
      </a>
      <button className="otoiawase ml-auto text-[18px]">お問い合わせ</button>
    </div>
  );
}
