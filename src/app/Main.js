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
    solvedTitle: 'ourlyが…',
    solvedSubtitle: '新感覚のコミュニケーションを創造',
    solvedContent:
      '部署や年齢を超えた、意外な繋がりを無数に生み出すSNSのようなUIを設計しました。<br />特にブロックごとのリアクション・コメント機能が、小さなコミュニケーションの発生を見逃しません。',
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
    solvedTitle: 'ourlyが…',
    solvedSubtitle: '月1の定例・レポートで組織改善をサポート',
    solvedContent:
      '月1回の定例・レポーティングを実施しています。<br />社内報の閲覧状況や前月からの変化などのデータを見ながら、インナーコミュニケーション分野に<br />携わってきたプロフェッショナルが、各担当者様や企業様が抱えていらっしゃる課題に沿って振り返りと次のアクションをご提案いたします。<br />もちろん定例以外にもお困りの際は、その都度サポートさせていただきます。',
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
    solvedTitle: 'ourlyが…',
    solvedSubtitle: 'シンプルさを追求した入稿・閲覧・管理画面',
    solvedContent:
      '馴染み深く直感的で、シンプルな操作性を追求し、究極に使いやすい画面に仕上げました。<br />ITの知識は不要で、年代問わず誰でも入稿が可能です。「CMSの導入・運用は難しい」と感じたことのある方は、ぜひourlyをお試しください。',
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
        transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <p>{text}</p>
      <span className="bubble-triangle"></span>
    </div>
  );
}

export default function Main() {
  return (
    <main className="main">
      {data.map((personal, index) => (
        <React.Fragment key={`fragment-${index}`}>
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
          <div className={personal.classSolved} key={personal}>
            <h2 className="text-[40px] text-center font-bold p-16">
              {personal.solvedTitle}
              <br />
              {personal.solvedSubtitle}
            </h2>
            <img src={personal.imgSolved} alt={personal.solvedImgInfo} />
            <p
              dangerouslySetInnerHTML={{ __html: personal.solvedContent }}
              className="w-[40%] text-[16px] leading-8 text-center flex justify-center m-auto"
            ></p>
          </div>
        </React.Fragment>
      ))}
    </main>
  );
}
