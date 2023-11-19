'use client';
import React from 'react';
import './css/globals.css';
import './css/Scrollnav.css';
import { useState, useEffect } from 'react';
import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSPy,
} from 'react-scroll';
import _debounce from 'lodash/debounce';

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
  const handleScroll = _debounce(() => {
    //Topから50%になったら表示する
    if (window.scrollY > window.innerHeight / 2) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }

    //今のところを検査してactivesectionを設置
    const scrollPosition = window.scrollY + window.innerHeight;
    const section = [
      'section1',
      'section2',
      'section3',
      'section4',
      'section5',
      'section6',
      'section7',
      'section8',
    ];
    const scrollPositionTop = window.scrollY;
    const scrollPositionBottom = window.scrollY + window.innerHeight;
    for (let i = 0; i < section.length; i++) {
      const element = document.getElementById(section[i]);
      if (
        element &&
        element.offsetTop <= scrollPositionTop &&
        element.offsetTop + element.offsetHeight >= scrollPositionTop
      ) {
        setActiveSection(section[i]);
        break;
      }
    }
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    //Effectを削除
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`scroll-nav ${showNav ? '' : 'scroll-nav-hide'}`}>
      <ul>
        <ScrollLink
          to="section1"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={() => setActiveSection('section1')}
          onSetInactive={() => setActiveSection(null)}
        >
          <li
            className={`nav-dot ${
              activeSection === 'section1' ? 'nav-dot-active' : ''
            }`}
          ></li>
        </ScrollLink>
        <ScrollLink
          to="section2"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={() => setActiveSection('section2')}
          onSetInactive={() => setActiveSection(null)}
        >
          <li
            className={`nav-dot ${
              activeSection === 'section2' ? 'nav-dot-active' : ''
            }`}
          ></li>
        </ScrollLink>
        <ScrollLink
          to="section3"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={() => setActiveSection('section3')}
          onSetInactive={() => setActiveSection(null)}
        >
          <li
            className={`nav-dot ${
              activeSection === 'section3' ? 'nav-dot-active' : ''
            }`}
          ></li>
        </ScrollLink>
        <ScrollLink
          to="section4"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={() => setActiveSection('section4')}
          onSetInactive={() => setActiveSection(null)}
        >
          <li
            className={`nav-dot ${
              activeSection === 'section4' ? 'nav-dot-active' : ''
            }`}
          ></li>
        </ScrollLink>
        <ScrollLink
          to="section5"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={() => setActiveSection('section5')}
          onSetInactive={() => setActiveSection(null)}
        >
          <li
            className={`nav-dot ${
              activeSection === 'section5' ? 'nav-dot-active' : ''
            }`}
          ></li>
        </ScrollLink>
        <ScrollLink
          to="section6"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={() => setActiveSection('section6')}
          onSetInactive={() => setActiveSection(null)}
        >
          <li
            className={`nav-dot ${
              activeSection === 'section6' ? 'nav-dot-active' : ''
            }`}
          ></li>
        </ScrollLink>
        <ScrollLink
          to="section7"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={() => setActiveSection('section7')}
          onSetInactive={() => setActiveSection(null)}
        >
          <li
            className={`nav-dot ${
              activeSection === 'section7' ? 'nav-dot-active' : ''
            }`}
          ></li>
        </ScrollLink>
        <ScrollLink
          to="section8"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={() => setActiveSection('section8')}
          onSetInactive={() => setActiveSection(null)}
        >
          <li
            className={`nav-dot ${
              activeSection === 'section8' ? 'nav-dot-active' : ''
            }`}
          ></li>
        </ScrollLink>
      </ul>
    </nav>
  );
}
