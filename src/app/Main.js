import React from 'react';
import './css/globals.css';
import './css/Main.css';

const Section = ({
  imgAnnoying,
  imgSolved,
  annoyingImgInfo,
  solvedImgInfo,
}) => {
  return (
    <main className="main">
      <div className="annoying">
        <h2 className="text-[40px] font-bold">
          私も会社のコミュニケーションについて悩んでいます…
        </h2>
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
      <Section
        imgAnnoying="/img/20Yman-02-bgN.png"
        annoyingImgInfo="young man is annoyed"
        imgSolved="/img/20Yman-04-bgN.png"
        solvedImgInfo="happy young man cause problems solved"
      />
      <Section />
      <Section />;
    </>
  );
}
