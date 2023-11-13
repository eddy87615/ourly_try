'use client';
import React from 'react';
import './css/globals.css';
import './css/Scrollnav.css';
import { useState, useEffect, useRef } from 'react';
import { inView } from 'framer-motion';

const scrollnav = [
  {
    id: 'section1',
    text: 'TOP',
  },
  {
    id: 'section2',
    text: '一体感について…',
  },
  {
    id: 'section3',
    text: '会社の雰囲気について…',
  },
  {
    id: 'section4',
    text: '社内報の編集について…',
  },
  {
    id: 'section5',
    text: '優れている分析機能',
  },
  {
    id: 'section6',
    text: '機能一覧',
  },
  {
    id: 'section7',
    text: '社内報の比較',
  },
  {
    id: 'section8',
    text: 'お問い合わせ',
  },
];

export default function Scrollnav() {
  return (
    <ul className="scroll-nav">
      {scrollnav.map((nav, index) => (
        <li className="nav-dot" id={nav.id} key={index}></li>
      ))}
    </ul>
  );
}
