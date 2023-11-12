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
    text: 'どの記事が<br />どのくらい読まれているか<br />わかる',
    class: 'title',
  },
  {
    img: '/img/02.svg',
    imgAlt: 'number 2',
    text: 'どのグループに<br />読まれているのか<br />わかる',
    class: 'title',
  },
  {
    img: '/img/03.svg',
    imgAlt: 'number 3',
    text: 'どれほど<br />読まれるようになったのか<br />わかる',
    class: 'title',
  },
];

const detail = [
  {
    img: '/img/analyze01.jpg',
    imgAlt: 'ourly analysis function part one, about read condition',
    text: '記事ごとに算出された閲覧状況を、管理画面で一括確認できます。数値ベースの改善で「伝えたつもり」をなくします。PV数などの基本指標はもちろん、記事ごとに閲覧率・読了率・リアクション率などourly独自の指標でも分析できるのでより詳細に閲覧状況を把握できます。',
  },
  {
    img: '/img/analyze02.jpg',
    imgAlt:
      'ourly analysis function part two, about which grop read the article',
    text: '部署別・役職別・職種別など、さまざまなセグメントで閲覧状況を確認できます。<br />また、セグメントは拠点別、入社年数別など各企業ごとにカスタマイズできるので、組織を自由な角度から可視化することができます。',
  },
  {
    img: '/img/analyze03.jpg',
    imgAlt:
      'ourly analysis function part three, the chart for the total codition to make you improve the articles',
    text: 'バブルチャートで閲覧状況の変化を直感的に確認できます。これにより社内報改善の成果が分かります。また1ヶ月ごと、3ヶ月ごと、6ヶ月ごとに変化を確認できるため、どの期間でPDCAを回していくのか明確な目標を持って社内報改善に取り組めます。',
  },
];

export default function Sub() {
  const ref01 = useRef(null);
  const ref02 = useRef(null);
  const inView01 = useInView(ref01, { once: true });
  const inView02 = useInView(ref02, { once: true });

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
      <section className="detail-title">
        <h2 className="text-[40px] text-center font-bold p-16">
          ourlyも…
          <br />
          独自の分析機能で閲覧状況が一目で分かる
        </h2>
        <motion.div
          ref={ref01}
          className="titleSection"
          variants={containerVariants}
          initial="hidden"
          animate={inView01 ? 'visible' : 'hidden'}
        >
          {title.map((sec, index) => (
            <motion.div
              className={sec.class}
              key={index} // 使用 text 作为唯一的 key
              variants={itemVariants}
              custom={1}
              transition={{ delay: 0.8 + index * 0.5 }}
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
      <section className="detail-content">
        {detail.map((content, index) => (
          <motion.div
            ref={ref02}
            key={index}
            className="p-8 content-div"
            variants={itemVariants}
            custom={2}
            transition={{ delay: 0.5 + index * 0.8 }}
            initial="hidden"
            animate={inView02 ? 'visible' : 'hidden'}
          >
            <img src={content.img} />
            <p
              dangerouslySetInnerHTML={{ __html: content.text }}
              className="text-[16px] leading-[30px]"
            ></p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
