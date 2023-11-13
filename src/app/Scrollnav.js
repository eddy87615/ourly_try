'use client';
import React from 'react';
import './css/globals.css';
import './css/Scrollnav.css';
import { useState, useEffect } from 'react';

const scrollnav = [
  {
    id: 'section1',
    text: 'TOP',
    link: '#section1',
  },
  {
    id: 'section2',
    text: '一体感について…',
    link: '#section2',
  },
  {
    id: 'section3',
    text: '会社の雰囲気について…',
    link: '#section3',
  },
  {
    id: 'section4',
    text: '社内報の編集について…',
    link: '#section4',
  },
  {
    id: 'section5',
    text: '優れている分析機能',
    link: '#section5',
  },
  {
    id: 'section6',
    text: '機能一覧',
    link: '#section6',
  },
  {
    id: 'section7',
    text: '社内報の比較',
    link: '#section7',
  },
  {
    id: 'section8',
    text: 'お問い合わせ',
    link: '#section8',
  },
];

export default function Scrollnav() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      setShowNav(scrollPosition > window.innerHeight / 2);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ul className={`scroll-nav ${showNav ? 'scroll-nav-show' : ''}`}>
      {scrollnav.map((nav, index) => (
        <a href={nav.link} key={index}>
          <li className="nav-dot"></li>
        </a>
      ))}
    </ul>
  );
}
