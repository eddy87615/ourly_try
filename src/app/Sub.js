'use client';
import React from 'react';
import './css/globals.css';
import './css/Sub.css';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

const content = [
  {
    imgNum: '/img/01.svg',
    imgNumAlt: 'number 1',
    title: 'どの記事が<br />どのくらい読まれているか<br />わかる',
    imgContent: '/img/analyze01.png',
    imgimgContentAlt: 'ourly analysis function part one, about read condition',
    text: '記事ごとに算出された閲覧状況を、管理画面で一括確認できます。数値ベースの改善で「伝えたつもり」をなくします。PV数などの基本指標はもちろん、記事ごとに閲覧率・読了率・リアクション率などourly独自の指標でも分析できるのでより詳細に閲覧状況を把握できます。',
    bgimg: '/img/1-bg.svg',
    bgimgAlt: 'Number one background pic.',
  },
  {
    imgNum: '/img/02.svg',
    imgAlt: 'number 2',
    title: 'どのグループに<br />読まれているのか<br />わかる',
    imgContent: '/img/analyze02.png',
    imgimgContentAlt:
      'ourly analysis function part two, about which grop read the article',
    text: '部署別・役職別・職種別など、さまざまなセグメントで閲覧状況を確認できます。<br />また、セグメントは拠点別、入社年数別など各企業ごとにカスタマイズできるので、組織を自由な角度から可視化することができます。',
    bgimg: '/img/2-bg.svg',
    bgimgAlt: 'Number two background pic.',
  },
  {
    imgNum: '/img/03.svg',
    imgAlt: 'number 3',
    title: 'どれほど<br />読まれるようになったのか<br />わかる',
    imgContent: '/img/analyze03.png',
    imgimgContentAlt:
      'ourly analysis function part three, the chart for the total codition to make you improve the articles',
    text: 'バブルチャートで閲覧状況の変化を直感的に確認できます。これにより社内報改善の成果が分かります。<br />また1ヶ月ごと、3ヶ月ごと、6ヶ月ごとに変化を確認できるため、どの期間でPDCAを回していくのか明確な目標を持って社内報改善に取り組めます。',
    bgimg: '/img/3-bg.svg',
    bgimgAlt: 'Number three background pic.',
  },
];

const subEndDiv = [
  {
    img: '/img/30Yman-01-bgN.png',
    alt: '30 years old man feels happy about problems sloved with ourly',
    text: '私の声が伝わっているのがわかりました！',
    class: 'subend01',
  },
  {
    img: '/img/30Ywoman-03bgN.png',
    alt: '30 years old woman feels happy about problems sloved with ourly',
    text: 'みんなの好みに合う社内報が作れるようになった！',
    class: 'subend02',
  },
  {
    img: '/img/20Yman-01-bgN.png',
    alt: '20 years old man feels happy about problems sloved with ourly',
    text: 'いつでも会社とつながっていて帰属意識を感じました！',
    class: 'subend03',
  },
];

export default function Sub({ subEndDiv }) {
  // const refs = Array.from({ length: 6 }, (_, index) => React.createRef());
  // console.log(refs[2]);
  const ref01 = useRef(null);
  const ref02 = useRef(null);
  const ref03 = useRef(null);
  const ref04 = useRef(null);
  const ref05 = useRef(null);
  // const inViews = refs.map((ref) => useInView(ref, { once: true }));

  const inView01 = useInView(ref01, { once: true });
  const inView02 = useInView(ref02, { once: true });
  const inView03 = useInView(ref03, { once: true });
  const inView04 = useInView(ref04, { once: true });
  const inView05 = useInView(ref05, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 1 * -100 },
    visible: { opacity: 1, x: 0 },
  };
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const subEndDivsLeft = {
    hidden: { x: 1 * -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const subEndDivsRight = {
    hidden: { x: 1 * 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="sub" id="section4">
      <h2 className="text-[40px] text-center font-bold p-16">
        ourlyも…
        <br />
        独自の分析機能で閲覧状況が一目で分かる
      </h2>

      <div className="container">
        {content.map((obj, index) => (
          <motion.div
            className="content-div"
            key={index}
            ref={ref01}
            variants={itemVariants}
            initial="hidden"
            animate={inView01 ? 'visible' : 'hidden'}
            transition={{ delay: index * 0.5 }}
          >
            <div>
              <motion.div
                ref={ref02}
                variants={titleVariants}
                initial="hidden"
                animate={inView02 ? 'visible' : 'hidden'}
                transition={{ delay: index * 0.7, duration: 0.5 }}
              >
                <ul className="title">
                  <li>
                    <img src={obj.imgNum} alt={obj.imgNumAlt} />
                  </li>
                  <li>
                    <h3
                      dangerouslySetInnerHTML={{ __html: obj.title }}
                      className="text-[32px] text-center font-bold pt-10"
                    ></h3>
                  </li>
                </ul>
                <ul className="detail-content">
                  <li>
                    <img src={obj.imgContent} alt={obj.imgimgContentAlt} />
                  </li>
                  <li>
                    <p
                      dangerouslySetInnerHTML={{ __html: obj.text }}
                      className="text-[16px] leading-[30px]"
                    ></p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <ul className="h-full ">
        <motion.li
          className="flex w-full h-1/3 px-[10%] subend01"
          ref={ref03}
          variants={subEndDivsLeft}
          initial="hidden"
          animate={inView03 ? 'visible' : 'hidden'}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <img src="/img/30Yman-01-bgN.png" alt="" />
          <p className="text-[40px] font-bold">
            私の声が伝わっているのがわかりました！
          </p>
        </motion.li>
        <motion.li
          className="flex w-full h-1/3 px-[10%] subend02"
          ref={ref04}
          variants={subEndDivsRight}
          initial="hidden"
          animate={inView04 ? 'visible' : 'hidden'}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <img src="/img/30Ywoman-03bgN.png" alt="" />
          <p className="text-[40px] font-bold">
            私の声が伝わっているのがわかりました！
          </p>
        </motion.li>
        <motion.li
          className="flex w-full h-1/3 px-[10%] subend03"
          ref={ref05}
          variants={subEndDivsLeft}
          initial="hidden"
          animate={inView05 ? 'visible' : 'hidden'}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <img src="/img/20Yman-01-bgN.png" alt="" />
          <p className="text-[40px] font-bold">
            私の声が伝わっているのがわかりました！
          </p>
        </motion.li>
        <li className="h-screen function">
          <h3 className="text-[32px] font-bold text-center pt-16">機能一覧</h3>
          <div className="hexagon">
            <div className="hexagon01">
              <img src="/img/hexagon-O.svg" />
              <img src="/img/hexagon-B.svg" />
            </div>
            <div className="hexagon02">
              <img src="/img/hexagon-T.svg" />
              <img src="/img/hexagon-R.svg" />
              <img src="/img/hexagon-G.svg" />
            </div>
            <div className="hexagon03">
              <img src="/img/hexagon-P.svg" />
              <img src="/img/hexagon-O.svg" />
            </div>
          </div>
          <img src="/img/20Yman-05-bgN.png" />
        </li>
      </ul>
    </div>
  );
}
