'use client';
import React from 'react';
import './css/globals.css';
import './css/Main.css';
import { TypeAnimation } from 'react-type-animation';
import Typewriter from './Typewriter';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

// //-----TYPING-----//

// const TypeComponent = () => {
//   return (
//     <TypeAnimation
//       style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
//       sequence={[`どのグループに\n読まれているのか\nわかる`, 10000]}
//     />
//   );
// };

// //-----TYPING-----//

const data = [
  {
    imgAnnoying: '/img/20Yman-02-bgN.png',
    annoyingImgInfo: 'young man is annoyed',
    imgSolved: '/img/20Yman-04-bgN.png',
    solvedImgInfo: 'happy young man cause problems solved',
    content: '私は会社のコミュニケーションについて悩んでいます…',
    article01: '会社の最新情報をキャッチしたい…',
    article02: '会社に今何が流行っているのが知りたい…',
    article03: '従業員向けのイベントがあるのか知りたい…',
    article04: '帰属意識を高めたい…',
    classAnnoying: 'annoyingman01',
    classSolved: 'solvedman01',
  },
  {
    imgAnnoying: '/img/30Yman-06.png',
    annoyingImgInfo: '30y man is annoyed',
    imgSolved: '/img/30Yman-04-bgN.png',
    solvedImgInfo: 'happy 30y man cause problems solved',
    content: '社内の雰囲気をもっと向上させたい…',
    article01: '私の声がちゃんと届いているのか知りたい…',
    article02: '社内の雰囲気を良くしたい…',
    article03: '従業員とのコミュニケーションを良くしたい…',
    article04: '会社をもっといい会社にしたい…',
    classAnnoying: 'annoyingman02',
    classSolved: 'solvedman02',
  },
  {
    imgAnnoying: '/img/30Ywoman-01-bgN-2.png',
    annoyingImgInfo: 'young woman is annoyed',
    imgSolved: '/img/30Ywoman-02-bgN-2.png',
    solvedImgInfo: 'happy young woman cause problems solved',
    content: '私は皆んなの好みに合う社内報を作りたい…',
    article01: '皆んなはどんな内容が好きですか？',
    article02: '編集や印刷とか時間をかかりすぎて…',
    article03: '皆んな本当に社内報読んでくれているのかを知りたい…',
    article04: '皆んなは社内報の内容をどう思っていますか？',
    classAnnoying: 'annoyingwoman',
    classSolved: 'solvedwoman',
  },
];

function SpeechBubble({ text, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={`speech-bubble text-2xl font-bold ${className}`}
      style={{
        transform: isInView ? 'none' : 'translateX(-100%)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <p>{text}</p>
      <span className="bubble-triangle"></span>
    </div>
  );
}

function Main() {
  return (
    <main className="main">
      {data.map((personal, index) => (
        <>
          <div className={personal.classAnnoying} key={index}>
            <h2 className="text-[40px] font-bold">
              <span className="underLine">{personal.content}</span>
            </h2>
            <img src={personal.imgAnnoying} alt={personal.annoyingImgInfo} />

            <SpeechBubble text={personal.article01} className="left-[16%]" />
            <SpeechBubble text={personal.article02} className="left-[32%]" />
            <SpeechBubble text={personal.article03} className="left-[20%]" />
            <SpeechBubble text={personal.article04} className="left-[10%]" />
          </div>
          <div className={personal.classSolved}>
            <img src={personal.imgSolved} alt={personal.solvedImgInfo} />
          </div>
        </>
      ))}
    </main>
  );
}

// const Section = ({
//   imgAnnoying,
//   imgSolved,
//   annoyingImgInfo,
//   solvedImgInfo,
//   content,
//   classAnnoying,
//   classSolved,
// }) => {
//   return (
//     <main className="main">
//       <div className={classAnnoying}>
//         <h2 className="text-[40px] font-bold">
//           <span className="underLine">{content}</span>
//         </h2>
//         <img src={imgAnnoying} alt={annoyingImgInfo} />
//         <div className="speech-bubble">
//           <p>会社の最新情報をキャッチしたい</p>
//         </div>
//         <div className="speech-bubble">
//           <p>Your text goes here here here </p>
//         </div>
//         <div className="speech-bubble">
//           <p>Your text goes here </p>
//         </div>
//       </div>
//       <div className={classSolved}>
//         <img src={imgSolved} alt={solvedImgInfo} />
//       </div>
//     </main>
//   );
// };

// export default function Main() {
//   return (
//     <>
//       <Section
//         imgAnnoying="/img/20Yman-02-bgN.png"
//         annoyingImgInfo="young man is annoyed"
//         imgSolved="/img/20Yman-04-bgN.png"
//         solvedImgInfo="happy young man cause problems solved"
//         content="私は会社のコミュニケーションについて悩んでいます…"
//         classAnnoying="annoyingman01"
//         classSolved="solvedman01"
//       />
//       <Section
//         imgAnnoying="/img/30Yman-06.png"
//         annoyingImgInfo="30y man is annoyed"
//         imgSolved="/img/30Yman-04-bgN.png"
//         solvedImgInfo="happy 30y man cause problems solved"
//         content="社内の雰囲気をもっと向上させたい…"
//         classAnnoying="annoyingman02"
//         classSolved="solvedman02"
//       />
//       <Section
//         imgAnnoying="/img/30Ywoman-01-bgN-2.png"
//         annoyingImgInfo="young woman is annoyed"
//         imgSolved="/img/30Ywoman-02-bgN-2.png"
//         solvedImgInfo="happy young woman cause problems solved"
//         content="社内の雰囲気をもっと向上させたい…"
//         classAnnoying="annoyingwoman"
//         classSolved="solvedwoman"
//       />
//     </>
//   );
// }

export default Main;
