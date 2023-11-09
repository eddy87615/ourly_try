'use client';
import React from 'react';
import './css/globals.css';
import './css/Main.css';
import { TypeAnimation } from 'react-type-animation';
import Typewriter from './Typewriter';

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
    classAnnoying: 'annoyingman01',
    classSolved: 'solvedman01',
  },
  {
    imgAnnoying: '/img/30Yman-06.png',
    annoyingImgInfo: '30y man is annoyed',
    imgSolved: '/img/30Yman-04-bgN.png',
    solvedImgInfo: 'happy 30y man cause problems solved',
    content: '社内の雰囲気をもっと向上させたい…',
    classAnnoying: 'annoyingman02',
    classSolved: 'solvedman02',
  },
  {
    imgAnnoying: '/img/30Ywoman-01-bgN-2.png',
    annoyingImgInfo: 'young woman is annoyed',
    imgSolved: '/img/30Ywoman-02-bgN-2.png',
    solvedImgInfo: 'happy young woman cause problems solved',
    content: '社内の雰囲気をもっと向上させたい…',
    classAnnoying: 'annoyingwoman',
    classSolved: 'solvedwoman',
  },
];

const Section = ({
  imgAnnoying,
  imgSolved,
  annoyingImgInfo,
  solvedImgInfo,
  content,
  classAnnoying,
  classSolved,
}) => {
  return (
    <main className="main">
      <div className={classAnnoying}>
        <h2 className="text-[40px] font-bold">
          <span className="underLine">{content}</span>
        </h2>
        <img src={imgAnnoying} alt={annoyingImgInfo} />
        <div className="speech-bubble">
          <p>会社の最新情報をキャッチしたい</p>
        </div>
        <div className="speech-bubble">
          <p>Your text goes here here here </p>
        </div>
        <div className="speech-bubble">
          <p>Your text goes here </p>
        </div>
      </div>
      <div className={classSolved}>
        <img src={imgSolved} alt={solvedImgInfo} />
      </div>
    </main>
  );
};

export default function Main() {
  return (
    <>
      <Section
        imgAnnoying="/img/20Yman-02-bgN.png"
        annoyingImgInfo="young man is annoyed"
        imgSolved="/img/20Yman-04-bgN.png"
        solvedImgInfo="happy young man cause problems solved"
        content="私は会社のコミュニケーションについて悩んでいます…"
        classAnnoying="annoyingman01"
        classSolved="solvedman01"
      />
      <Section
        imgAnnoying="/img/30Yman-06.png"
        annoyingImgInfo="30y man is annoyed"
        imgSolved="/img/30Yman-04-bgN.png"
        solvedImgInfo="happy 30y man cause problems solved"
        content="社内の雰囲気をもっと向上させたい…"
        classAnnoying="annoyingman02"
        classSolved="solvedman02"
      />
      <Section
        imgAnnoying="/img/30Ywoman-01-bgN-2.png"
        annoyingImgInfo="young woman is annoyed"
        imgSolved="/img/30Ywoman-02-bgN-2.png"
        solvedImgInfo="happy young woman cause problems solved"
        content="社内の雰囲気をもっと向上させたい…"
        classAnnoying="annoyingwoman"
        classSolved="solvedwoman"
      />
    </>
  );
}
