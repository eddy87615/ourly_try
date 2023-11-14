'use client';
import React from 'react';
import './css/globals.css';
import './css/Scrollnav.css';
import { useState, useEffect } from 'react';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSPy,
} from 'react-scroll';

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
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    //Scrollのリスニング
    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', arguments);
    });
    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', arguments);
    });

    //Scrollリスニングを解除
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);
  const handleScroll = () => {
    //Topから50%になったら表示する
    if (window.scrollY > window.innerHeight / 2) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }

    //今のところを検査してactivesectionを設置
    const scrollPotion = window.scrollY + window.innerHeight / 2;
    const section = [
      'top',
      'slider',
      'section0',
      'section1',
      'section2',
      'section3',
      'section4',
      'section5',
      'section6',
      'section7',
    ];
    for (let i = 0; i < section.length; i++) {
      const element = document.getElementById(section[i]);
      console.log(element);
      if (
        element &&
        element.offsetTop <= scrollPotion &&
        element.offsetTop + element.offsetHeight > scrollPotion
      ) {
        setActiveSection(section[i]);
        break;
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    //Effectを削除
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="scroll-nav">
      <ul>
        <li className="nav-dot">
          <Link to="slider" spy={true} smooth={true} offset={0} duration={500}>
            TOP
          </Link>
        </li>
        <li className="nav-dot">
          <Link
            to="section1"
            spy={true}
            smooth={true}
            offset={70}
            duration={500}
          >
            SECTION1
          </Link>
        </li>
      </ul>
    </nav>
  );
}
