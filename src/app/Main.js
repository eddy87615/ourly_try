'use client';
import React from 'react';
import './css/globals.css';
import './css/Main.css';
import { TypeAnimation } from 'react-type-animation';
import Typewriter from './Typewriter';

//-----TYPING-----//

const TypeComponent = () => {
  return (
    <TypeAnimation
      style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
      sequence={[`どのグループに\n読まれているのか\nわかる`, 10000]}
    />
  );
};

//-----TYPING-----//

const Section = ({
  imgAnnoying,
  imgSolved,
  annoyingImgInfo,
  solvedImgInfo,
  content,
}) => {
  return (
    <main className="main">
      <div className="annoying">
        <h2 className="text-[40px] font-bold">{content}</h2>
        <img src={imgAnnoying} alt={annoyingImgInfo} />
      </div>
      <div className="solved">
        <img src={imgSolved} alt={solvedImgInfo} />
      </div>
    </main>
  );
};

export default function Main() {
  return (
    <>
      <TypeComponent />
      <Section
        imgAnnoying="/img/20Yman-02-bgN.png"
        annoyingImgInfo="young man is annoyed"
        imgSolved="/img/20Yman-04-bgN.png"
        solvedImgInfo="happy young man cause problems solved"
        content="私も会社のコミュニケーションについて悩んでいます…"
      />
      <Section />
      <Section />;
    </>
  );
}
