'use client';
import React from 'react';
import './css/globals.css';
import './css/Sub.css';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

const title = [
  {
    img: '/img/01.svg',
    imgAlt: 'number 1',
    text: 'どのグループに<br />読まれているのか<br />わかる',
    class: 'title',
  },
  {
    img: '/img/02.svg',
    imgAlt: 'number 2',
    text: 'どの記事が<br />どのくらい読まれているか<br />わかる',
    class: 'title',
  },
  {
    img: '/img/03.svg',
    imgAlt: 'number 3',
    text: 'どれほど<br />読まれるようになったのか<br />わかる',
    class: 'title',
  },
];

export default function Sub() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="sub">
      <section className="detail">
        <h2 className="text-[40px] text-center font-bold p-16">
          ourlyも…
          <br />
          独自の分析機能で閲覧状況が一目で分かる
        </h2>
        <motion.div
          ref={ref}
          className="titleSection"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {title.map((sec, index) => (
            <motion.div
              className={sec.class}
              key={index} // 使用 text 作为唯一的 key
              variants={itemVariants}
              custom={1}
              transition={{ delay: index * 0.5 }}
            >
              <img src={sec.img} alt={sec.imgAlt} />
              <motion.h3
                dangerouslySetInnerHTML={{ __html: sec.text }}
                className="text-[32px] text-center font-bold pt-10"
              ></motion.h3>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
